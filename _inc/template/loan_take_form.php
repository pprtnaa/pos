<form id="form-loan" class="form-horizontal" action="loan.php" method="post" enctype="multipart/form-data">
  <input type="hidden" id="action_type" name="action_type" value="TAKE">
  <div class="box-body">

    <div class="form-group">
      <label for="date" class="col-sm-3 control-label">
        <?php echo trans('label_date'); ?><i class="required">*</i>
      </label>
      <div class="col-sm-6">
        <input type="date" class="form-control" id="date" name="date" value="<?php echo date('Y-m-d'); ?>" autocomplete="off">
      </div>
    </div>

    <div class="form-group">
      <label for="loan_from" class="col-sm-3 control-label">
        <?php echo trans('label_loan_from'); ?>
      </label>
      <div class="col-sm-6">
        <select class="form-control select2" name="loan_from">
          <option value="">
            <?php echo trans('text_select'); ?>
          </option>
          <option value="bank">Bank</option>
          <option value="ngo">NGO</option>
          <option value="person">Person</option>
          <option value="others" selected>Others</option>
       </select>
      </div>
    </div>

    <div class="form-group">
      <label for="ref_no" class="col-sm-3 control-label">
        <?php echo trans('label_ref_no'); ?>
      </label>
      <div class="col-sm-6">
        <input type="text" class="form-control" id="ref_no" value="" name="ref_no" autocomplete="off">
      </div>      
    </div>

    <div class="form-group">
      <label for="title" class="col-sm-3 control-label">
        <?php echo trans('label_title'); ?><i class="required">*</i>
      </label>
      <div class="col-sm-6">
        <input type="text" id="title" class="form-control" name="title">
      </div>
    </div>

    <div class="form-group">
      <label for="amount" class="col-sm-3 control-label">
        <?php echo trans('label_amount'); ?><i class="required">*</i>
       </label>
      <div class="col-sm-6">
        <input type="text" id="amount" class="form-control" name="amount" ng-model="amount" onclick="this.select();" onkeypress="return IsNumeric(event);" ondrop="return false;" onpaste="return false;" onKeyUp="if(this.value<0){this.value='1';}">
      </div>
    </div>

    <div class="form-group">
      <label for="interest" class="col-sm-3 control-label">
        <?php echo trans('label_interest'); ?> (%)
       </label>
      <div class="col-sm-6">
        <input type="text" id="interest" class="form-control" name="interest" ng-init="interest=0" ng-model="interest" value="{{ interest}}" onclick="this.select();" onkeypress="return IsNumeric(event);" ondrop="return false;" onpaste="return false;" onKeyUp="if(this.value<0){this.value='1';}">
      </div>
    </div>

    <div class="form-group">
      <label for="payable" class="col-sm-3 control-label">
        <?php echo trans('label_payable'); ?>
       </label>
      <div class="col-sm-6">
        <input type="text" id="payable" class="form-control" name="payable" ng-model="payable" value="{{payable}}" onkeypress="return IsNumeric(event);" ondrop="return false;" onpaste="return false;" onKeyUp="if(this.value<0){this.value='1';}" readonly>
      </div>
    </div>

    <!-- <div class="form-group">
      <label class="col-sm-3 control-label">
        <?php echo trans('label_loan_for'); ?><i class="required">*</i>
      </label>
      <div class="col-sm-6 store-selector">
        <div class="checkbox selector">
          <label>
            <input type="checkbox" onclick="$('input[name*=\'loan_store\']').prop('checked', this.checked);"> Select / Deselect
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
                <input type="checkbox" name="loan_store[]" value="<?php echo $the_store['store_id']; ?>" <?php echo $the_store['store_id'] == store_id() ? 'checked' : null; ?>>
                <?php echo $the_store['name']; ?>
              </label>
            </div>
          <?php endforeach; ?>
          </div>
        </div>
      </div>
    </div> -->

    <div class="form-group">
      <label for="details" class="col-sm-3 control-label">
        <?php echo trans('label_details'); ?>
      </label>
      <div class="col-sm-6">
        <textarea name="details" id="details" class="form-control"></textarea>
      </div>
    </div>

    <div class="form-group hidden">
      <label for="status" class="col-sm-3 control-label">
        <?php echo trans('label_status'); ?><i class="required">*</i>
      </label>
      <div class="col-sm-6">
        <select id="status" class="form-control" name="status" >
          <option value="1">
            <?php echo trans('text_active'); ?>
          </option>
          <option value="0">
            <?php echo trans('text_in_active'); ?>
          </option>
        </select>
      </div>
    </div>

    <div class="form-group hidden">
      <label for="sort_order" class="col-sm-3 control-label">
        <?php echo sprintf(trans('label_sort_order'), null); ?><i class="required">*</i>
      </label>
      <div class="col-sm-6">
        <input type="text" class="form-control" id="sort_order" value="0" name="sort_order" onkeypress="return IsNumeric(event);" ondrop="return false;" onpaste="return false;" onKeyUp="if(this.value<0){this.value='1';}" required>
      </div>
    </div>

    <div class="form-group">
      <label for="image" class="col-sm-3 control-label">
        <?php echo trans('label_attachment'); ?>
      </label>
      <div class="col-sm-6">
        <div class="preview-thumbnail">
          <a ng-click="POSFilemanagerModal({target:'image',thumb:'image_thumb'})" onClick="return false;" href="#" data-toggle="image" id="image_thumb">
            <img src="../assets/pprtnaa/img/noimage.jpg">
          </a>
          <input type="hidden" name="image" id="image" value="">
        </div>
      </div>
    </div>

    <div class="form-group">
      <label class="col-sm-3 control-label"></label>
      <div class="col-sm-6">            
        <button id="take-loan-submit" class="btn btn-info" data-form="#form-loan" data-datatable="#invoice-invoice-list" name="submit" data-loading-text="Processing...">
          <i class="fa fa-fw fa-pencil"></i>
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