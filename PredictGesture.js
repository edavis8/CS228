const knnClassifier = ml5.KNNClassifier();
var weight = 3;
var a = 1;
var frameIndex = 0;
var currentFrame;
var flip;
var trainingCompleted = false;
var numSamples;
var numFeatures;
var irisData;
var currentFeatures;
var currentLabel;
var testingSampleIndex = 0;
var predictedLabel;
var features;
var currentTestingSample;
//numFeatures = irisData.shape[1];
var predictedClassLabels = nj.zeros([numSamples]);
  

function GotResults(err,result) {
   //     console.log(testingSampleIndex, currentTestingSample.toString());
       // console.log(result.label);
  //      predictedClassLabels.set(testingSampleIndex, result.label);
        testingSampleIndex += 1;
        if (testingSampleIndex == numSamples) {
            testingSampleIndex =0;
        }
}

function Train() {
    numSamples = train0.shape[3];
  //  console.log(test);
  //  console.log(train0);
 //   var even;
    console.log("I am being trained");
    for (i = 0; i < numSamples; i++) {
        features = train0.pick(null,null,null,i).reshape(1,120);
        console.log(features.toString());
        knnClassifier.addExample(features.tolist(), 0);        
        
//        if (i % 2 == 0) {
  //          even = i;
  //          currentFeatures = irisData.pick(even).slice([0, 4]);
    //        currentLabel = irisData.pick(even).get(4);




    //        console.log(currentLabel.toString());
    //    }
    }
}

function Test() {
    numSamples = test.shape[3];
//    console.log("I am being tested");
    for (i = 0; i < numSamples; i++) {
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
