<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css" type="text/css">
    <title>question</title>
</head>
<body>

    <div class="container">
        <div class="content">
            <div class="left-content">
                <div class="box-q-list">
                    <ul>
                        <li>Pertannyaan ke-1</li>
                        <li>Pertannyaan ke-2</li>
                        <li>Pertannyaan ke-3</li>
                        <li>Pertannyaan ke-4</li>
                        <li>Pertannyaan ke-5</li>
                        <li>Pertannyaan ke-6</li>
                        <li>Pertannyaan ke-7</li>
                        <li>Pertannyaan ke-8</li>
                        
                    </ul>
                </div>
            </div>
            <div class="right-content">
                <div class="box-q">
                    <p id="desc-q">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat numquam sit non consequatur explicabo minima quod voluptate similique dicta, impedit porro suscipit facilis. Cum quaerat saepe ea delectus, officia nam.</p>

                    <form action="">
                        <input type="radio" name="gender" value="male"> Male<br>
                        <input type="radio" name="gender" value="female"> Female<br>
                        <input type="radio" name="gender" value="other"> Other
                    </form>
                </div>
            </div>
            <div class="pull-right">
                <input type="button" class="button-paginate" id="next" onclick="nextPage()" value="next" />
                <input type="button" class="button-paginate" id="previous" onclick="previousPage()" value="previous" />
            </div>
        </div>
    </div>
    
</body>
</html>