function door(events) {
    let result = '';
    let counter = 0;
    let remote = 0;
    let incrDecr = 0;
  
    for (const event of events) {
  
      if (event == 'P')
      {
        if (counter == 0)
          remote = incrDecr = 1;
        else if (counter > 0 && counter < 5)
        {
          if (remote != 0)
            remote = 0;
          else if (remote == 0 && incrDecr == 1)
           remote = 1;
          else if (remote == 0 && incrDecr == -1)
            remote = -1;
        }
        else if (counter == 5)
          remote = incrDecr = -1;
      }
      else if (event == 'O')
        {
          if (remote == -1)
            remote = incrDecr = 1;
          else if (remote == 1)
            remote = incrDecr = -1;
        }
        
  
      if (remote == -1 && counter > 0)
        counter--;
      else if (remote == 1 && counter < 5)
        counter++;
      result += counter;
    }
    console.log(events);
    return result;
  }

module.exports = door;