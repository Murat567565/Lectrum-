{
    //Ligth
    const TimeNow = new Date ;
    console.log(TimeNow.getHours());
if(6 < TimeNow.getHours() && TimeNow.getHours() < 12){
  console.log('Доброе утро');
}else if(12 < TimeNow.getHours() && TimeNow.getHours() < 18){
  console.log('Добрый день');
}else if(18 < TimeNow.getHours() && TimeNow.getHours() < 24){
    console.log('Добрый вечер');
  }else{
    console.log('Доброй ночи');
  }

    //Hard
    const storage = [
        {
        day : 13,
        week : 8,
        habits : ('Прочитать книгу')
    }
    ];
    if(storage[3] === String){
        console.log(storage[3]);
    }else{
        alert('У вас нету привычек');
    }
    
}
