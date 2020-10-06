const knnClassifier = ml5.KNNClassifier();
var weight = 3;
var a = 1;
var frameIndex = 0;
var currentFrame;
var flip;
var trainingCompleted = false;
var numSamplesZero;
var numSamplesOne;
var numSamplesTest;
var numFeatures;
var irisData;
var currentFeatures;
var currentLabel;
var testingSampleIndex = 0;
var predictedLabel;
var features;
var currentTestingSample;

//numFeatures = irisData.shape[1];
var predictedClassLabels = nj.zeros([numSamplesTest]);
  

function GotResults(err,result) {
   //     console.log(testingSampleIndex, currentTestingSample.toString());
        console.log(result.label);
  //      predictedClassLabels.set(testingSampleIndex, result.label);
        testingSampleIndex += 1;
        if (testingSampleIndex == numSamplesTest) {
            testingSampleIndex =0;
        }
}

function Train() {
    numSamplesZero = train0.shape[3];
    numSamplesOne = train1.shape[3];
  //  console.log(test);
  //  console.log(train0);
 //   var even;
 //   console.log("I am being trained");
    for (i = 0; i < numSamplesZero; i++) {
        features = train0.pick(null,null,null,i).reshape(1,120);
 //       console.log(features.toString());
        knnClassifier.addExample(features.tolist(), 0);        
        features = train1.pick(null,null,null,i).reshape(1,120);
  //      console.log(features.toString());
        knnClassifier.addExample(features.tolist(), 1);  

}
}

function Test() {
    numSamplesTest = test.shape[3];
//    console.log("I am being tested");
    for (i = 0; i < numSamplesTest; i++) {
            currentTestingSample = test.pick(null,null,null,i).reshape(1,120);
 //   currentFeatures = irisData.pick(testingSampleIndex).slice([0, 4]);
 //   currentLabel = irisData.pick(testingSampleIndex).get(4);
            predictedLabel = knnClassifier.classify(currentTestingSample.tolist(), GotResults);
        //    console.log(currentTestingSample.toString() );
            
//}
}
}
    

function draw() {
    clear();

    if (trainingCompleted == false) {
        Train();
        trainingCompleted = true;

    }
    Test();
    

}
