const Product = require('../models/Product');



exports.seedProducts=async ()=>{
    const items = [
        { title: 'mazda', price: 3000, imagePath: "car1.jpeg",imagePath2:"car5.jpeg",description:"Cars have controls for driving, parking, passenger comfort, and a variety of lights. Over the decades, additional features and controls have been added to vehicles, making them progressively more complex." },
        { title: 'ford', price: 2000, imagePath: "car2.jpeg",imagePath2:"car6.jpeg",description:"Cars have controls for driving, parking, passenger comfort, and a variety of lights. Over the decades, additional features and controls have been added to vehicles, making them progressively more complex." },
        { title: 'nisan', price: 1000, imagePath: "car3.jpeg",imagePath2:"car7.jpeg",description:"Cars have controls for driving, parking, passenger comfort, and a variety of lights. Over the decades, additional features and controls have been added to vehicles, making them progressively more complex." },
        { title: 'honda', price: 500, imagePath: "car4.jpeg" ,imagePath2:"car8.jpeg",description:"Cars have controls for driving, parking, passenger comfort, and a variety of lights. Over the decades, additional features and controls have been added to vehicles, making them progressively more complex."},
    
      ];
    
    for (let i = 0; i < items.length; i++) {
        await new Product({...items[i]}).save();
        
    }
    
}
