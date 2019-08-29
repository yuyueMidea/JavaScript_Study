## 在switch语句中用范围值 
 
 function getWaterState(tempInCelsius) {
        let state;

        switch (true) {
          case (tempInCelsius <= 0): 
            state = 'Solid';
            break;
          case (tempInCelsius > 0 && tempInCelsius < 100): 
            state = 'Liquid';
            break;
          default: 
            state = 'Gas';
        }
        return state;
      }
