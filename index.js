var currentQuote = {
    text : '',
    author : ''
}
var nextQuote = {
    text : '',
    author : ''
}

const getQuote = ()=> {

    currentQuote = {
        text : nextQuote.text,
        author : nextQuote.author
    }

    $("#text").html(currentQuote.text);
    $("#author").html("~ "+currentQuote.author);

    $('#tweet-quote').attr(
        'href',
        'https://twitter.com/intent/tweet?hashtags=quotes&text='+currentQuote.text+' -'+currentQuote.author
    )
    $.ajax({
        url: "http://api.quotable.io/random",
        cache: false,
        success: function(result){
            let text = result.content;
            let author = result.author;

            nextQuote.text = text;
            nextQuote.author = author;
            if(currentQuote.text == ""){
                getQuote();
            }
        },
        error: function(){
            console.log("error")
        }
        })
        
    }

$(document).ready(function() {
    getQuote();
})