<form id="create-user-form" class="form-horizontal" action="user.php" method="post" enctype="multipart/form-data">
  <input type="hidden" id="action_type" name="action_type" value="CREATE">
  <div class="box-body">
    <div class="form-group">
      <label for="user_image" class="col-sm-3 control-label">
        <?php echo sprintf(trans('label_thumbnail'),null); ?>
      </label>
      <div class="col-sm-7">
        <div class="preview-thumbnail">
          <a ng-click="POSFilemanagerModal({target:'user_image',thumb:'user_thumb'})" onClick="return false;" href="#" data-toggle="image" id="user_thumb">
            <img src="../assets/pprtnaa/img/noimage.jpg" alt="">
          </a>
          <input type="hidden" name="user_image" id="user_image" value="">
        </div>
      </div>
    </div>
    
    <div class="form-group">
      <label for="username" class="col-sm-3 control-label">
        <?php echo sprintf(trans('label_name'), null); ?><i class="required">*</i>
      </label>
      <div class="col-sm-7">
        <input type="text" class="form-control" id="username" value="" name="username" required>
      </div>
    </div>

    <div class="form-group">
      <label for="email" class="col-sm-3 control-label">
        <?php echo sprintf(trans('label_email'), null); ?><i class="required">*</i>
      </label>
      <div class="col-sm-7">
        <input type="email" class="form-control" id="email" value="" name="email">
      </div>
    </div>

    <div class="form-group">
      <label for="mobile" class="col-sm-3 control-label">
        <?php echo sprintf(trans('label_mobile'), null); ?><i class="required">*</i>
      </label>
      <div class="col-sm-7">
        <input type="text" class="form-control" id="mobile" value="" name="mobile">
      </div>
    </div>

    <div class="form-group">
      <label for="password" class="col-sm-3 control-label">
        <?php echo trans('label_password'); ?><i class="required">*</i>
      </label>
      <div class="col-sm-7">
        <input type="password" class="form-control" id="password" name="password" autocomplete="off" required>
      </div>
    </div>

    <div class="form-group">
      <label for="password1" class="col-sm-3 control-label">
        <?php echo trans('label_password_retype'); ?><i class="required">*</i>
      </label>
      <div class="col-sm-7">
        <input type="password" class="form-control" id="password1" name="password1" autocomplete="off" required>
      </div>
    </div>

    <div class="form-group">
      <label for="group_id" class="col-sm-3 control-label">
        <?php echo trans('label_group'); ?><i class="required">*</i>
        <span data-toggle="tooltip" title="" data-original-title="<?php echo trans('hint_group'); ?>"></span>
      </label>
      <div class="col-sm-7">
        <div class="{{ !hideGroupAddBtn ? 'input-group' : null }}">
          <select id="group_id" class="form-control" name="group_id" required>
            <option value="">
              <?php echo sprintf(trans('text_select'), null); ?>
            </option>
            <?php foreach (get_usergroups() as $user_group) : ?>
              <option value="<?php echo $user_group['group_id']; ?>">
                <?php echo $user_group['name'] ; ?>
              </option>
            <?php endforeach; ?>
          </select>
          <a ng-hide="hideGroupAddBtn" class="input-group-addon" ng-click="createNewUsergroup();" onClick="return false;" href="user_group.php?box_state=open">
            <i class="fa fa-plus"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="dob" class="col-sm-3 control-label">
        <?php echo sprintf(trans('label_date_of_birth'), null); ?>
      </label>
      <div class="col-sm-7">
        <input type="date" class="form-control" id="dob" name="dob" autocomplete="off">
      </div>
    </div>

    <div class="form-group">
      <label class="col-sm-3 control-label">
        <?php echo trans('label_store'); ?><i class="required">*</i>
      </label>
      <div class="col-sm-7 store-selector">
        <div class="checkbox selector">
          <label>
            <input type="checkbox" onclick="$('input[name*=\'user_store\']').prop('checked', this.checked);"> Select / Deselect
          </label>
        </div>
        <div class="filter-searchbox">
          <input ng-model="search_store" class="form-control" type="text" id="search_store" placeholder="<?php echo trans('search'); ?>">
        </div>
        <div class="well well-sm store-well"> 
          <div filter-list="search_store">
          <?php foreach(get_stores() as $the_store) : ?>                    
            <div class="checkbox">
              <label>                         
                <input type="checkbox" name="user_store[]" value="<?php echo $the_store['store_id']; ?>" <?php echo $the_store['store_id'] == store_id() ? 'checked' : null; ?>>
                <?php echo $the_store['name']; ?>
              </label>
            </div>
          <?php endforeach; ?>
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="status" class="col-sm-3 control-label">
        <?php echo trans('label_status'); ?><i class="required">*</i>
      </label>
      <div class="col-sm-7">
        <select id="status" class="form-control" name="status" >
          <option <?php echo isset($request->post['status']) && $request->post['status'] == '1' ? 'selected' : null; ?> value="1">
            <?php echo trans('text_active'); ?>
          </option>
          <option <?php echo isset($request->post['status']) && $request->post['status'] == '0' ? 'selected' : null; ?> value="0">
            <?php echo trans('text_inactive'); ?>
          </option>
        </select>
      </div>
    </div>

    <div class="form-group">
      <label for="sort_order" class="col-sm-3 control-label">
        <?php echo sprintf(trans('label_sort_order'), null); ?><i class="required">*</i>
      </label>
      <div class="col-sm-7">
        <input type="number" class="form-control" id="sort_order" value="<?php echo isset($request->post['sort_order']) ? $request->post['sort_order'] : 0; ?>" name="sort_order" required>
      </div>
    </div>

    <div class="form-group">
      <label class="col-sm-3 control-label"></label>
      <div class="col-sm-7">
        <button class="btn btn-info" id="create-user-submit" type="submit" name="create-user-submit" data-form="#create-user-form" data-loading-text="Saving...">
          <span class="fa fa-fw fa-save"></span> 
          <?php echo trans('button_save'); ?>
        </button>
        <button type="reset" class="btn btn-danger" id="reset" name="reset">
          <span class="fa fa-fw fa-circle-o"></span> 
          <?php echo trans('button_reset'); ?>
        </button>
      </div>
    </div>
    
  </div>
</form>