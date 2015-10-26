<h1>Food Intake</h1>
            <h2><?=$message?></h2>
            <div class="panel panel-success">
                <div class="panel-heading">Your Data</div>
                <div class="panel-body">
                    <dl class="dl-horizontal">
                        <dt>Name</dt>
                        <dd><?=$person['Name']?></dd>
                        <dt>Age</dt>
                        <dd><?=$person['Age']?></dd>
                        <dt>Goal</dt>
                        <dd><?=$person['CallorieGoal']?></dd>
                        <dt>Today's Intake</dt>
                        <dd><?=$total?></dd>
                    </dl>
                </div>
            </div>
      <div class="row">
        <div class="col-md-8 col-xs-10">
            <a href="edit.php" class="btn btn-success">
                <i class="glyphicon glyphicon-plus"></i>
                New Record
            </a>
            <a href="#" class="btn btn-danger">
                <i class="glyphicon glyphicon-trash"></i>
                Delete All
                <span class="badge"><?=count($food)?></span>
            </a>
            <br />
            <table class="table table-condensed table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Callories</th>
                </tr>
              </thead>
              <tbody>
                <?php foreach($food as $i => $meal): ?>
                <tr>
                  <th scope="row">
                    <div class="btn-group" role="group" aria-label="...">
                      <a href="" title="View" class="btn btn-default btn-xs"><i class="glyphicon glyphicon-eye-open"></i></a>
                      <a href="edit.php?id=<?=$i?>" title="Edit" class="btn btn-default btn-xs"><i class="glyphicon glyphicon-edit"></i></a>
                      <a href="delete.php?id=<?=$i?>" title="Delete" class="btn btn-default btn-xs"><i class="glyphicon glyphicon-trash"></i></a>
                    </div>
                  </th>
                  <td><?=$meal['Name']?></td>
                  <td><?=date("M d Y  h:i:sa", $meal['Time'])?></td>
                  <td><?=$meal['Callories']?></td>
                </tr>
                <?php endforeach; ?>
              </tbody>
            </table>  
          
        </div>
        <div class="col-md-4 col-xs-10">
            <div class="alert alert-success" role="alert">
                You did well
            </div>
            <div class="alert alert-danger" role="alert">
                Oh no! You messed up.
            </div>

        </div>
      </div>
      
            