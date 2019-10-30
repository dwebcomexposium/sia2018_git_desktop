(function($) {

  var siaJS = {

      init : function(){

          this.agrimalin();
          this.popin();
          this.quiz();
      },

      agrimalin : function(){

        const quotes = [
          [
              "Wikipsum wishful wizards want wands Thomas Hyndeman DD (a.k.a. Hendeman or Hendyman) was an English medieval churchman"
          ],
          [
              "The red-throated piping guan (Pipile cujubi) is a species of bird in the family Cracidae."
          ],
          [
              "The heats were held at 10:00.[5] The semifinals were held at 18:18.[6] The final was held at 18:41.[7]"
          ],
          [
            "Trogonophidae (Palearctic worm lizards or desert ringed lizards) is a small family of amphisbaenians, containing five species in four genera."
          ],
          [
            "he Massachusetts Teachers' Oath was a loyalty oath required to teach in Massachusetts from 1935 to 1967."
          ]
      ];
      const quote = document.querySelector('.quote');

      let random = null;
      random =  Math.floor(Math.random() * quotes.length);
      quote.innerHTML = quotes[random];


      //génération des anecdotes au clic du bouton 
      const btnQuote = document.querySelector("#new-anecdote");
      function newQuote() {
        random =  Math.floor(Math.random() * quotes.length);
        quote.innerHTML = quotes[random];
      }

      btnQuote.addEventListener('click', newQuote);



      },


      
      popin : function(){
        
        var lastScrollTop = 0;
        var sticky = $(".agrimalin-sticky");
  
        //Listen scroll event
        $(window).scroll(function () {
          //Detect if sticky is on top
          var scroll = $(window).scrollTop();
          if (scroll >= 1) {
            sticky.addClass("cloak");
          } else {
            sticky.removeClass("cloak");
          }
  
          //Detect if user scroll up or down
          var scrollPosition = $(this).scrollTop();
          if (scrollPosition > lastScrollTop) {
            sticky.addClass("cloak");
          } else {
            sticky.removeClass("cloak");
          }
          lastScrollTop = scrollPosition;
        });
  
        //Show/hide sticky on hover
        sticky.mouseenter( function () {

          $(this).removeClass('cloak');

        }).mouseleave(function () {

          $(this).addClass('cloak');

        });
      },





      quiz : function(){
        var quiz = {
          questions: [
            {
              question: '1. En week-end vous êtes plutôt :',
              responses: [
                {
                  response: 'Activités culturelles avec les enfants',
                  value: 'parcours-pedagogique'
                },
                {
                  response: 'Rien de tel qu’un bon resto !',
                  value: 'parcours-gustatif'
                },
                {
                  response: 'Balade en pleine nature',
                  value: 'parcours-animaux'
                }
              ]
            },
            {
              question: '2. Quelle onomatopée vous parle le plus ? ',
              responses: [
                {
                  response: 'Ah ! Oh ! Hourra !',
                  value: 'parcours-pedagogique'
                },
                {
                  response: 'Miam ! Glouglou…',
                  value: 'parcours-gustatif'
                },
                {
                  response: 'Wouaf, Meuhhh, cotcotcot',
                  value: 'parcours-animaux'
                }
              ]
            },
            /*{
              question: '3. Quelle émission préférez-vous ?',
              responses: [
                {
                  response: 'C’est pas sorcier !',
                  value: 'parcours-pedagogique'
                },
                {
                  response: 'Top chef',
                  value: 'parcours-gustatif'
                },
                {
                  response: 'Une saison au zoo',
                  value: 'parcours-animaux'
                }
              ]
            },
            {
              question: '4. Quand on vous dit agriculture <br>vous pensez au mot :',
              responses: [
                {
                  response: 'Tracteur',
                  value: 'parcours-pedagogique'
                },
                {
                  response: 'Fromage',
                  value: 'parcours-gustatif'
                },
                {
                  response: 'Mouton',
                  value: 'parcours-animaux'
                }
              ]
            },
            {
              question: '5. Quand vous venez au Salon <br>International de l’Agriculture c’est pour :',
              responses: [
                {
                  response: 'Découvrir le monde agricole en famille',
                  value: 'parcours-pedagogique'
                },
                {
                  response: 'Manger, boire, renouer avec les produits du terroir',
                  value: 'parcours-gustatif'
                },
                {
                  response: 'Approcher des races que je n’ai pas l’habitude de voir',
                  value: 'parcours-animaux'
                }
              ]
            },
            {
              question: '6. Dans la vie de tous les jours vous êtes :',
              responses: [
                {
                  response: 'Curieux(se)',
                  value: 'parcours-pedagogique'
                },
                {
                  response: 'Gourmand(e)',
                  value: 'parcours-gustatif'
                },
                {
                  response: 'Aventureux(se)',
                  value: 'parcours-animaux'
                }
              ]
            },
            {
              question: '7. Quand vous faites le point sur votre année,<br> ce qui vous manque le plus c’est :',
              responses: [
                {
                  response: 'Une sortie au musée',
                  value: 'parcours-pedagogique'
                },
                {
                  response: 'Un week-end sur la route des terroirs',
                  value: 'parcours-gustatif'
                },
                {
                  response: 'Se reconnecter avec la nature',
                  value: 'parcours-animaux'
                }
              ]
            },
            {
              question: '8. A quoi ressemble votre sac de voyage ?',
              responses: [
                {
                  response: 'Un guide, c’est le strict minimum !',
                  value: 'parcours-pedagogique'
                },
                {
                  response: 'Un panier repas bien garni',
                  value: 'parcours-gustatif'
                },
                {
                  response: 'Un spray anti-moustique pour explorer la faune',
                  value: 'parcours-animaux'
                }
              ]
            }*/
          ]
        };

        var appQuiz = new Vue({
          el: '#quiz-parcours',

          data: {
            quiz: quiz,
            stepIndex: 0,
            isDisabled: true,
            showResult: false,
            userResponses: [],
            userData: {
              lastName: '',
              firstName: '',
              email: '',
              siaNews: false,
              cxpmNews: false,
            },
          },

          methods: {
            // Enable nav button
            enableButton: function() {
              this.isDisabled = false;
            },

            // Disable nav button
            disableButton: function() {
              this.isDisabled = true;
            },

            // Go to the next question
            nextQuestion: function() {
              this.disableButton();

              if(this.stepIndex < this.quiz.questions.length) {
                this.stepIndex++;
              }
            },

            // Show quiz result & submit form
            result: function() {
              this.showResult = true;

              var modeMap = {};
              var maxResponse = this.userResponses[0];
              var maxCount = 1;

              for (var i = 0; i < this.userResponses.length; i++) {

                var response = this.userResponses[i];

                if(modeMap[response] == null) {
                  modeMap[response] = 1;
                }

                else {
                  modeMap[response]++;
                }

                if(modeMap[response] > maxCount) {
                  maxResponse = response;
                  maxCount = modeMap[response];
                }
              }
              return maxResponse;


            },
          }
        });
      },



  }
  siaJS.init();

})(jQuery);
