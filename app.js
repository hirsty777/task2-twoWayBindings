const app = Vue.createApp({
    data(){
        return{
            userInput:'',
            userInputOnEnter:''
        }
    },
    methods:{
    alertOnClick(){
      alert('button was clicked')  
    },
    inputText(event){
        this.userInput=event.target.value;
    },
    InputTextOnEnter(event){
        this.userInputOnEnter=event.target.value;
    }
    
   } 
});
app.mount('#assignment');