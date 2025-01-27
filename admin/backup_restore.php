<?php 
ob_start();
session_start();
include ("../_init.php");

// Redirect, If user is not logged in
if (!is_loggedin()) {
  redirect(root_url() . '/index.php?redirect_to=' . url());
}

// Redirect, If User has not Read Permission
if (user_group_id() != 1 && !has_permission('access', 'backup') && !has_permission('access', 'restore') || DEMO) {
  redirect(root_url() . '/'.ADMINDIRNAME.'/dashboard.php');
}

$cron_model = registry()->get('loader')->model('cron');

// database name
$db_name = $sql_details['db'];

// generate backup file
if ($request->server['REQUEST_METHOD'] == 'POST' && isset($request->post['action_type']) && $request->post['action_type'] == 'BACKUP')
{
  try {

    if (user_group_id() != 1 && !has_permission('access', 'backup') || DEMO) {
      throw new Exception(trans('error_backup_permission'));
    }

    if (!isset($request->post['table'])) {
      throw new Exception(trans('error_backup_table'));
    } 

    $tables = $request->post['table'];

    header('Pragma: public');
    header('Expires: 0');
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="' . $db_name . '_' . date('Y-m-d_H-i-s', time()) . '_backup.sql"');
    header('Content-Transfer-Encoding: binary');

    $output = $cron_model->MakeBackup($tables);

    echo $output;    
    exit;

  } catch (Exception $e) {
    $error = $e->getMessage();
  }
}

$angular_disabled = true;

// Set Document Title
$document->setTitle(trans('title_backup_restore'));

// Add Script
$document->addScript('../assets/pprtnaa/js/backup-restore.js');

// INCLUDE HEADER & FOOTER
include("header.php"); 
include ("left_sidebar.php") ;
?>

<!-- Content Wrapper Start -->
<div class="content-wrapper">

  <!-- Content Header Start -->
  <section class="content-header">
    <h1>
      <span class="fa fa-fw fa-download"></span> <?php echo trans('text_backup_restore_title'); ?>
      <small>
        <?php echo store('name'); ?>
      </small>
    </h1>
    <ol class="breadcrumb">
      <li>
        <a href="dashboard.php">
          <i class="fa fa-dashboard"></i> 
          <?php echo trans('text_dashboard'); ?>
        </a>
      </li>
      <li class="active">
        <?php echo trans('text_backup_restore_title'); ?>
      </li>
    </ol>
  </section>
  <!-- Content Header End -->

  <!-- Content Start -->
  <section class="content">
    <?php if(DEMO) : ?>
    <div class="box">
      <div class="box-body">
        <div class="alert alert-info mb-0">
          <p><span class="fa fa-fw fa-info-circle"></span> <?php echo $demo_text; ?></p>
        </div>
        <div class="alert alert-warning mb-0">
          <p><span class="fa fa-fw fa-info-circle"></span> Backup/Restore features are disabled in demo version</p>
        </div>
      </div>
    </div>
    <?php endif; ?>
    <div class="box box-default box-no-border">
      <div class="nav-tabs-custom">
        <ul class="nav nav-tabs backup-nav">

          <?php if(user_group_id() == 1 || has_permission('access', 'backup')) : ?>
          <li class="active">
            <a href="#backup" data-toggle="tab" aria-expanded="false">
              <?php echo trans('text_backup'); ?>
            </a>
          </li>
          <?php endif; ?>

          <?php if(user_group_id() == 1 || has_permission('access', 'restore')) : ?>
            <li>
              <a href="#restore" data-toggle="tab" aria-expanded="false">
                <?php echo trans('text_restore'); ?>
              </a>
            </li>
          <?php endif; ?>
        </ul>
        <div class="tab-content">
          <?php if(user_group_id() == 1 || has_permission('access', 'backup')) : ?>
            <div class="tab-pane active" id="backup">
              <?php if (isset($error)) : ?>
                <div class="alert alert-danger">
                  <p>
                    <span class="fa fa-fw fa-warning"></span> 
                    <?php echo $error; ?>
                  </p>
                </div>
              <?php endif; ?>
              <form action="backup_restore.php" method="post" id="form-export" class="form-horizontal">
                <input type="hidden" name="action_type" value="BACKUP">
                <div class="form-group">
                  <label class="col-sm-2 control-label">
                    <?php echo trans('label_databases'); ?>
                  </label>
                  <div class="col-sm-6">
                    <div class="filter-searchbox">
                      <input ng-model="search_table" class="form-control" type="text" placeholder="<?php echo trans('search'); ?>">
                    </div>
                    <div class="well well-sm">   
                      <div filter-list="search_table">
                        <?php foreach (get_all_tables() as $table): if (in_array($table[0], array('users','user_group','user_to_store'))) continue;?>
                          <div>
                              <input type="checkbox" name="table[]" value="<?php echo $table[0]; ?>" checked="checked">
                              <label>
                                <?php echo $table[0]; ?>
                              </label>
                          </div>
                        <?php endforeach; ?>  
                      </div> 
                    </div>
                    <button type="button" onclick="$(this).parent().find(':checkbox').prop('checked', true);" class="btn btn-link">
                      <?php echo trans('label_select_all'); ?>
                    </button>
                    &nbsp;/&nbsp;
                    <button type="button" onclick="$(this).parent().find(':checkbox').prop('checked', false);" class="btn btn-link">
                      <?php echo trans('label_unselect_all'); ?>
                    </button>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-6 col-sm-offset-2">
                    <button type="submit" form="form-export" class="btn btn-block btn-lg btn-info">
                      <i class="fa fa-download"></i> 
                      <?php echo trans('button_export'); ?>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          <?php endif; ?>

          <?php if(user_group_id() == 1 || has_permission('access', 'restore')) : ?>
            <div class="tab-pane" id="restore">
              <div class="alert alert-info">
                <p><span class="fa fa-fw fa-info-circle"></span> Restoring process may take several minute to complete. Neve close your browser before the process, otherwise system may break and not work properly.</p>
              </div>
              <form class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-2 control-label">
                    <?php echo trans('label_progress'); ?>
                  </label>
                  <div class="col-sm-9">
                    <div id="progress-restore" class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p class="text-blue">** Only .sql file is accepted</p>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-6 col-sm-offset-2">
                    <button type="button" id="button-restore" class="btn btn-block btn-lg btn-warning" data-loading-text="Restoring...">
                      <i class="fa fa-upload"></i> 
                      <?php echo trans('button_select_sql_file'); ?>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </section>
  <!-- Content End -->

</div>
<!-- Content Wrapper End -->

<?php include ("footer.php"); ?>