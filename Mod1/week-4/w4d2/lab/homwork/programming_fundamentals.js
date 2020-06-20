/*

DRY
dont repeat code

KISS
simple easy to read code

Avoid creating a YAGNI
only nessary fetures should be added

Do the simplest thing that could possibly work
there are a bunch of ways to write code but the simplest is usally the best

Don't make me think
code should be self expanitory 

Write code for the maintainer
write for someone who doesnt know the entire code base and can fix issues quickly

Single responsibility principle
one peace of code should be doing only one task and doing it well

Avoid premature optimization
have working code first then improve

Separation of concerns
simmilar to single resposibility where code funtions should have little overlap to do a task
*/

const f = l => {    //defines f as a funtion and l as an argument
    let es = 0, p = 0, c = 1, n = 0 // defines var in the function
    while (c <= l) {  // starts a while loop with the condition of c being less than or equal to l 
      n = c + p;    // not sure how 0 can equal 1 + 0 
      [c, p] = [n, c]   // both arrays have the same ints but making c,p equal to n,c is defining cp as n,c 
      es += (c % 2 === 0) ? c : 0   // 0 plus (the remander of 0 divided by 2 is loosely equal to 0) so 0+0 
    }
    return es  // returns es value
  }
  
  console.log(f(55)) // runs the f function with an argument of 55 

  

  const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    while (current <= limit) {
      let next = current + previous;
      previous = current;
      current = next;
      if (current % 2 === 0) {
        evenSum += current
      }
    }
    return evenSum;
  }
  
  
  console.log(f2(55)) // the same as before but with slightly better naming and structure

// i have no idea what the while loop is doing i get its reasigning vars but wat
