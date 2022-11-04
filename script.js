function generatequestion(score){
    if (score == 10){
        document.body.style.background = "blue"
        document.querySelector('.answers').innerHTML = ""
        document.querySelector('.question').innerHTML = "Nice Job"
    }else{
        let x = Math.floor(Math.random() * 100);
        let y = Math.floor(Math.random() * 100);
        document.querySelector('.question').innerHTML = "What is " + x +  " + " + y
        let correctanswer = Math.floor(Math.random() * 4);
        for (let i = 0; i < 4; i++){
            
            if (i == correctanswer){
                let answerDiv = document.createElement('div')
                answerDiv.classList.add('answer')
                answerDiv.innerHTML = y+x;
                document.querySelector('.answers').appendChild(answerDiv)
                answerDiv.addEventListener('click', () => {
                document.body.style.background = "green"
                setTimeout(() => {
                    document.body.style.background = "linear-gradient( rgb(29, 32, 114), rgb(86, 71, 255))";
                    
                    document.querySelector('.answers').innerHTML = ""
                    generatequestion(score)
                    
            }, 1000)
                    
                    score++
                    document.querySelector('.score').innerHTML = "Score: "+ score
                    
                
                })
                
                
                
                

                
            } else{
            
            
                let answerDiv = document.createElement('div')
                answerDiv.classList.add('answer')
                let wrongx = Math.floor(Math.random() * 100)
                let wrongy = Math.floor(Math.random() * 100)
                let wronganswer = wrongx * wrongy
                while(wrongx + wrongy === x+y){
                    wrongx = Math.floor(Math.random() * 100)
                    wrongy = Math.floor(Math.random() * 100)
                    
                }
                wronganswer = wrongx + wrongy
                answerDiv.innerHTML = wronganswer;
                document.querySelector('.answers').appendChild(answerDiv)
                answerDiv.addEventListener('click', () => {
                    document.body.style.background = "red"
                    document.querySelector('.answers').innerHTML = " correct answer: " + (x*y)
                    document.querySelector('.question').innerHTML = "Don't worry about it! Try again! LIVE LAUGH LOVE"
                    
                    
                })
            }
        }
    }
}

generatequestion(0);

