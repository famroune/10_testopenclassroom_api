// une fois que index chargé
    // on appel api : api/teddies
    $get("http://localhost:3000/api/teddies", {}, function(data){

        let ourson1 = data[0];
        let ourson2 = data[1];

        localstorage.setItem('ourson1', ourson1);
        localstorage.setItem('ourson2', ourson2);

        // je veux mettre mes oursons dans les div de l'index

        // récupérer les oursons en localstorage
        let indexOurson1 = localStorage.getItem('ourson1');
        let indexOurson2 = localStorage.getItem('ourson2');

        $('#indexOurson1').html('<div class="ourson1Name">' + indexOurson1.name +'</div>');
    });


    $('#indexOurson1').click(function(){
        // je stocke dans localstorage sur quel btn j'ai cliquer
        localStorage.setItem("btnsurlequeljeclick", indexOurson1._id);
        // je veux etre rediriger vers page detail.html
    });