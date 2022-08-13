// code your solution here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}
mondayWork()
mondayWork("work from home")


function outer(greeting, msg = "It's a fine day to learn") {
    const innerFunction = function (name, lang = "Python") {
        return `${greeting}, ${name}! ${msg} ${lang}`;
    };
        return innerFunction("student", "JavaScript");
}
outer("Hello");
/*
const array = (function (thingToAdd) {
    const base = 3;
    return [
      function () {
        return base + thingToAdd;
      },
      function () {
        return base;
      },
    ];
  })(2);

  function demoChain(name) 
  {
    const part1 = "hi";
    return function () 
    {
      const part2 = "there";
      return function () 
      {
        console.log(`${part1.toUpperCase()} ${part2} ${name}`);
      };
    };
  }
  demoChain("Dr. Stephen Strange")()(); 
 */

function wrapAdjective(par1="*")
{
    return function (adjective="special")
    {
        return `You are ${par1}${adjective}${par1}!`
    }
}
wrapAdjective("%")("a dedicated programmer")

