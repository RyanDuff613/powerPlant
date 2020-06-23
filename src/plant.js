const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateChanger = storeState();

const feed = changeState("soil");
const hydrate = changeState('water');
const giveLight = changeState("light");

const blueFood = changeState("soil")(5)
const greenFood = changeState("soil")(10)
const yuckyFood = changeState("soil")(-5)

const waterPlant = changeState('water')(5)

$(document).ready(function() {
  $('#bluefeed').click(function(){
    const newState = stateChanger(blueFood);
    $('#soil-value').text(newState.soil);
  });

  $('#greenfeed').click(function(){
    const newState = stateChanger(greenFood);
    $('#soil-value').text(newState.soil);
  });

  $('#yuckyfeed').click(function(){
    const newState = stateChanger(yuckyFood);
    $('#soil-value').text(newState.soil);
  });

  $('#givewater').click(function(){
    const newState = stateChanger(waterPlant);
    $('#water-value').text(newState.water);
  });

});