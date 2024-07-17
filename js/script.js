// ini java script

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('bmiform').addEventListener('submit', function(event) {
        event.preventDefault(); 

        let gender = document.querySelector('input[name="gender"]:checked');
        let height = parseFloat(document.getElementById('height').value);
        let weight = parseFloat(document.getElementById('weight').value);
        let errorjs = document.getElementById('error');
        let resultjs = document.getElementById('result');
        let downloadbtn = document.getElementById('downloadbtn');

        if (gender && height > 0 && weight > 0) {
            gender = gender.value; 
            console.log("Gender selected:", gender);

             let bmi = calculateBMI(height, weight);
            console.log("BMI calculated:", bmi);

            displayBMIResult(bmi);
        } else {
            errorjs.style.display = 'block';
            resultjs.style.display = 'none';
        }
    });

    document.getElementById('resetbtn').addEventListener('click', function() {
        resetBMI();
    });

  
    function calculateBMI() {
        let gender = document.querySelector('input[name="gender"]:checked');
        let height = parseFloat(document.getElementById('height').value);
        let weight = parseFloat(document.getElementById('weight').value);
        let resultjs = document.getElementById('result');
    }

    function calculateBMI(height, weight) {
        let heightInMeters = height / 100;
        let bmi = weight / (heightInMeters * heightInMeters);
        return bmi.toFixed(2);
    }

    function displayBMIResult(bmi) {
        let resultElement = document.getElementById('result');
        resultElement.innerHTML = `
          <div class="bmi-container">
            <p class="header-result">Result</p>
            <div class="bmi-result">
                <div class="bmi-category">${getBMICategory(bmi)}</div>
                <div class="bmi-value">${bmi}</div>
                <div class="bmi-category">${getBMIExplanation(bmi)}</div>
                <button id="downloadbtn">Download Results BMI</button>
            </div>    
            <div class="note-article"><p>Note : BMI does not fully represent a comprehensive diagnosis of a person's body health and risk of disease. You need further consultation regarding your risks and concerns regarding Arida's weight
            </p></div>
            <div class="result-article">
                 <p class="header-result-article">Some Diseases</p>
                <div class="article-text">${getHealthRisk(bmi)}</div>
                <div class="bmi-article">${getArticle(bmi)}</div>
            </div>
          </div>
        `;
        resultElement.style.display = 'block';
    }
       

    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return 'Thin';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'Normal';
        } else if (bmi >= 25 && bmi < 29.9) {
            return 'Overweight';
        } else {
            return 'Obesity';
        }
    }

    function getBMIExplanation(bmi) {
        if (bmi < 18.5) {
            return 'You Are Thin';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'You Are Normal';
        } else if (bmi >= 25 && bmi < 29.9) {
            return 'You Are Overweight';
        } else {
            return 'You Are Obesity';
        }
    }

    function getArticle(bmi) {
        if (bmi < 18.5) {
            return 'You have a BMI of less than 18.5, which means you fall into the Underweight category. To maintain optimal health, make sure to choose foods that are nutritious and meet your daily calorie needs. You are also advised to maintain a healthy diet and exercise regularly to maintain an ideal body weight.';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'Your BMI is in the Normal range (18.5 - 24.9), indicating that your weight is appropriate for your height. Continue to maintain your healthy diet and active lifestyle to maintain optimal health';
        } else if (bmi >= 25 && bmi < 29.9) {
            return 'You have a BMI between 25 and 29.9, which indicates that you are in the Overweight category. To reduce the risk of diseases such as diabetes and heart disease, it is recommended to reduce calorie intake, choose nutritious foods, and increase your physical activity.';
        } else {
            return 'Your BMI exceeds 30, which indicates that you fall into the Obesity category. This condition can increase the risk of serious diseases such as heart disease, diabetes and some types of cancer. To manage your weight and overall health, consult a health professional for a plan that suits your needs.';
        }
    }
    
    function getHealthRisk(bmi) {
        if (bmi < 18.5) {
            return '1.Increases the risk of nutritional deficiencies<br>2.Anemia<br>3.A weak immune system.';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'You have a low health risk.';
        } else if (bmi >= 25 && bmi < 29.9) {
            return '1.Heart disease<br>2.Diabetes<br>3.High blood pressure.';
        } else {
            return '1.Heart disease<br>2.Diabetes<br>3.Several types of cancer.';
        }
    }

    function resetBMI() {
        document.getElementById('bmiform').reset();
        document.getElementById('error').style.display = 'none';
        document.getElementById('result').style.display = 'none';
    }


})
    
    
    
