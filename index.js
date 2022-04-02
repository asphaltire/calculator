const calc = [];
let str ="";
function compile()
{
      // to make two single digit merge and push all in array
      let i=1;
      while(i<calc.length)
      {
          if(!isNaN(calc[i]) && !isNaN(calc[i-1]))
          {
              calc[i-1]+=calc[i];
              calc.splice(i,1);
          } 
          else
          i++;
          console.log(calc);
      }  
}
function topostfix() {
    const ans = [];
    const stack = [];
    var i = 0;
    while (i < calc.length) {
        if (!isNaN(calc[i])) {
            ans.push(calc[i]);
            i++;
        }
        else {
            if (calc[i] == '*' || calc[i] == '/') {
                if (stack[stack.length - 1] == '-' || stack[stack.length - 1] == '+') {
                    stack.push(calc[i]);
                    i++;
                }
                else if (stack.length == 0) {
                    stack.push(calc[i]);
                    i++;
                }
                else {
                    ans.push(stack.pop());
                }
            }
            else if (calc[i] == '-' || calc[i] == '+') {
                if (stack.length == 0) {
                    stack.push(calc[i]);
                    i++;
                }
                else {
                    ans.push(stack.pop());
                }
            }
        }
    }
    while (stack.length != 0) {
        ans.push(stack.pop());
    }
    while(calc.length!=0)
    {
        calc.pop();
    }
    console.log(ans);
    calculate(ans);
}

function calculate(ans) {
    const stack = [];
    for(let i=0;i<ans.length;i++)
    {
        switch(ans[i]){
            case "+":
                {
                   let a = stack.pop();
                   let b = stack.pop();
                    stack.push(b+a);
                    break;
                }
            case "-":
                {
                    let a = stack.pop();
                    let b = stack.pop();
                     stack.push(b-a);
                     break;
                 }
            case "*":
                {
                    let a = stack.pop();
                    let b = stack.pop();
                     stack.push(b*a);
                     break;
                 }
            case "/":
                {
                    let a = stack.pop();
                    let b = stack.pop();
                     stack.push(b/a);
                     break;
                 }
            default:
                {
                stack.push(parseInt(ans[i]));
                console.log(stack);
                }
        }
    }
    // console.log(stack);
    
    calc.push(stack.pop());
    str+=calc[0];
    output(calc);
}

function output(result) {
    document.getElementById("output").innerHTML = result;
}

function error()
{
    document.getElementById("output").innerHTML ="syntax Error";
}

function pushInStack(clicked) {

    if (clicked != "equal") 
    {   
        if(clicked!="del")
            str += document.getElementById(clicked).innerHTML;
        else if(clicked=="del")
        {
            str = str.slice(0,str.length-1);
            calc.pop();
            console.log(str);
            console.log(calc);
            
            output(str);
            return;
        }
        if (calc.length == 0) 
        {
            if (clicked != "div" && clicked != "mul")
                document.getElementById("output").innerHTML = document.getElementById(clicked).innerHTML;
            else
            {
                str="";
                error();
                return;
            }
        }
        else
        {
             output(str);
             console.log(str);
        }
            calc.push(document.getElementById(clicked).innerHTML);
            console.log(calc);

    }
    else {
        // console.log(calc);
        // calculate();
        str="";
        compile();
        topostfix();
    }

}