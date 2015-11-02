<?php
?>
            <a href="?action=create" class="btn btn-success ajax">
                <i class="glyphicon glyphicon-plus"></i>
                New Record
            </a>
            <a href="#" class="btn btn-danger">
                <i class="glyphicon glyphicon-trash"></i>
                Delete All
                <span class="badge"><?=count($model)?></span>
            </a>
            <br />


<div class="modal fade" id="myDialog">
  <div class="modal-dialog">
    <div class="modal-content">
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


<table class="table table-striped">
    <thead>
        <tr>
            <th>Actions</th>
            <th>Name</th>
            <th>Birthday</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach($model as $row): ?>
            <tr>
                  <th scope="row">
                    <div class="btn-group" role="group" aria-label="...">
                      <a href="" title="View" class="btn btn-default btn-xs ajax"><i class="glyphicon glyphicon-eye-open"></i></a>
                      <a href="?action=edit&id=<?=$row['id']?>" title="Edit" class="btn btn-default btn-xs ajax"><i class="glyphicon glyphicon-edit"></i></a>
                      <a href="?action=delete&id=<?=$row['id']?>" title="Delete" class="btn btn-default btn-xs ajax"><i class="glyphicon glyphicon-trash"></i></a>
                    </div>
                  </th>
                <td><?=$row['Name']?></td>
                <td><?=$row['Birthday']?></td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>
<script type="text/javascript">
    $(function(){
        $(".ajax").click(function(){
            $.get(this.href + "&format=plain").then(function(data){
                $("#myDialog .modal-content").html(data);
                $("#myDialog").modal('show');
            });
            return false;
        });
    });
</script>