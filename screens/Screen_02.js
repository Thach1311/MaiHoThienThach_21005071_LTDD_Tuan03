import { Image } from "react-native"
function Screen_02 (){

    const data = [
        {
            name: 'Apple',
            url: '../Data/Image 101.png',

        },
        {
            name: 'Pear',
            url: '../Data/Image 102.png',

        },
        {
            name: 'Coconut',
            url: '../Data/Image 103.png',

        },
        {
            name: 'Pear',
            url: '../Data/Image 105.png',

        },
        {
            name: 'Coconut',
            url: '../Data/Image 106.png',

        },
        {
            name: 'Coconut',
            url: '../Data/Image 107.png',

        },
        {
            name: 'Pear',
            url: '../Data/Image 105.png',

        },

    ];
    return (
        <>
           <div style={{width:'400px'}}>
               <div style={{display:'flex',justifyContent:'space-around',margin:'10px',width:'400px'}}>
                    <Image source={require('../Data/Image 183.png')}></Image>
                    <Image source={require('../Data/Image 182.png')}></Image>
               </div>
    
               <div style={{display:'flex',justifyContent:'center',marginBottom:'30px'}}>
                <input placeholder="Search" style={{width:'250px', height:'30px',borderRadius:'5px',width:'350px'}}></input>
              </div>
    
              <div style={{display:'flex',justifyContent:'space-around' }}>
                    <div style={{height:'30px', width:'100px',color:'#fff',backgroundColor:'#1dd75b',lineHeight:'30px',textAlign:'center',borderRadius:'10px'}}>Vegetable</div>
                    <div style={{height:'30px', width:'100px',color:'blue',backgroundColor:'#dddd',lineHeight:'30px',textAlign:'center',borderRadius:'10px'}}>Seafood</div>
                    <div style={{height:'30px', width:'100px',color:'blue',backgroundColor:'#dddd',lineHeight:'30px',textAlign:'center',borderRadius:'10px'}}>Drinks</div>
                
              </div>
              
              <div style={{display:'flex', justifyContent:'space-around'}}>
                <h2 style={{color:'#1dd75b'}}>Order your favourite!</h2>
                <h2  style={{color:'#ee8033'}}>See all </h2>
              </div>


           </div>

         <div style={{flexWrap:'wrap',display:'flex',overflow:'scroll'}} >
               {
                    data.map((value) => (
                        <div style={{backgroundColor:'#fff',display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center', height:'150px',width:'150px',borderRadius:'10px',margin:'20px'}} >
                            <img src={value.url} style={{width:'120px',height:'90%'}}></img>
                            <div style={{fontWeight:'700'}}>{value.name}</div>
                        </div>
                    ))
               }
         </div>
           
        </>
    )
}

export default Screen_02