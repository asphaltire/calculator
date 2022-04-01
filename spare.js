const calc = [];
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
    // output(ans);
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
    output(stack.pop());
}

function output(result) {
    document.getElementById("output").innerHTML = result;
}

function error()
{
    document.getElementById("output").innerHTML ="syntax Error";
}
let str ="";
function pushInStack(clicked) {

    if (clicked != "equal") 
    {   
        if(clicked!="del")
        str += document.getElementById(clicked).innerHTML;
        //to continuously print on screen 
        if(clicked=="del")
        {
            str = str.slice(0,str.length-1);
            calc.pop();
            console.log(str);
            console.log(calc);
            
            output(str);
            return;
        }
        if (calc.length == 0&&clicked!="del") 
        {
            if (clicked != "div" && clicked != "mul")
                document.getElementById("output").innerHTML = document.getElementById(clicked).innerHTML;
            else
            {
                error();
                return;
            }
        }
        else
        {
             output(str);
             console.log(str);
        }

        // to make two single digit merge and push all in array
        if (calc.length == 0)
        {
            calc.push(document.getElementById(clicked).innerHTML);
        }
        else if (clicked != "plus" && clicked != "mul" && clicked != "div" && clicked != "minus") 
        {
            if (!isNaN(calc[calc.length - 1])) {
                calc[calc.length - 1] += document.getElementById(clicked).innerHTML;
            }
            else
                calc.push(document.getElementById(clicked).innerHTML);
        }
        else
            calc.push(document.getElementById(clicked).innerHTML);

            console.log(calc);

    }
    else {
        // console.log(calc);
        // calculate();
        topostfix();
    }

}