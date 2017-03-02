var questionModule = angular.module('QuestionProgram', []);

questionModule.controller('QuestionProgramController', ['$scope', function($scope){
    
    var qpc = this;
    
    qpc.students =
    [
        {
            name: "Rebecca Sellmyer"
            
        },
        {
            name: "Mark Sellmyer"
        },
        {
            name: "Matt Sellmyer"
        },
        {
            name: "Jeromy Sellmyer"
        }
    ];
    
    qpc.students_completed = [];
    
    qpc.questions = 
    [
        {
             Questiontext: "Angular uses ____ and ______ in the template",
             Answertext: "directives and expressions"
        },
        {
            Questiontext: "You bootstrap you angular application with the ngApp directive",
            Answertext: "true"
        },
        {
            Questiontext: "Can you use the min version of angular to run an app?",
            Answertext: "yes"
        },
        {
            Questiontext: "What type of code can you use to 'dress up' you app?",
            Answertext: "bootstrap"
        }
    ];
    
    qpc.questions_completed = [];
    
    qpc.getNextQuestion = function(){
        
        if(qpc.questions.length > 0){
        var index = Math.floor(Math.random() * qpc.questions.length);
        
        qpc.selected_question = qpc.questions[index];
        
        qpc.questions_completed.push(qpc.selected_question);
        
        qpc.questions.splice(index, 1);
    }
    else{
        qpc.questions = qpc.questions_completed;
        qpc.questions_completed  = [];
    }
    
};

qpc.getNextStudent = function(){
    
    if(qpc.students.length > 0){
        var index = Math.floor(Math.random() * qpc.students.length);
        
        qpc.selected_student = qpc.students[index];
        
        qpc.students_completed.push(qpc.selected_student);
        
        qpc.students.splice(index, 1);
    }
    else{
        qpc.students = qpc.students_completed;
        qpc.students_completed = [];
    }
}

    qpc.getNext = function(){
        qpc.getNextQuestion();
        qpc.getNextStudent();
    }

    qpc.getNext();
    
}]);