'use strict';

function hoistingScope() {

    for (let i = 0; i < 1; i++) {
        var variableVar = "var в циклі";
        let variableLet = "let в циклі";
        const variableConst = "const в циклі";

        console.log("variableVar:", variableVar);
        console.log("variableLet:", variableLet);
        console.log("variableConst:", variableConst);
    }

    // var visible outside the loop
    console.log("variableVar:", variableVar);

    // let and const not visible outside the loop - we will get errors
    console.log("variableLet:", variableLet);
    console.log("variableConst:", variableConst);
}
hoistingScope();
