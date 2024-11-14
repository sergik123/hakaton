<?php require_once('header.php'); ?>
<div class="container">
    <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
            <h3>Ви можете відправити мені повідомлення</h3>
            <h5>Email розробника програми: <b><a href="mailto:<?=$id[0][0]['email'];?>"><?=$id[0][0]['email'];?></a></b></h5>
             <form role="form" action="/<?=Router::FOLDER;?>page/sendemail" method="post">
        <div class="row">
            <div class="form-group col-sm-6">
                <label for="name" class="h4">Ім'я</label>
                <input type="text" name="name" class="form-control" id="name" placeholder="Enter name" required>
            </div>
            <div class="form-group col-sm-6">
                <label for="email" class="h4">Email</label>
                <input type="email" name="email" class="form-control" id="email" placeholder="Enter email" required>
            </div>
        </div>
        <div class="form-group">
            <label for="message" class="h4 ">Повідомлення</label>
            <textarea id="message" name="message" class="form-control" rows="5" placeholder="Enter your message" required></textarea>
        </div>
        <button type="submit" name="form-submit" id="form-submit" class="btn btn-success btn-lg pull-right ">Відправити повідомлення</button>
    </form>
        </div>
    </div>
</div>
<?php require_once('footer.php'); ?>