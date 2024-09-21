import { Image } from "react-native"
function Screen_03 (){

    const data =[
        {
            url:'../Data/Image 101.png',
            des:'Apple Italia Piada',
            num: '2',
            price: '$ 28.00'
        },
        {
            url:'../Data/Image 107.png',
            des:'Pear American',
            num: '1',
            price: '$ 15.00'
        }, {
            url:'../Data/Image 105.png',
            des:'Coconut VietNam',
            num: '3',
            price: '$ 10.00'
        }, {
            url:'../Data/Image 106.png',
            des:'Apricot China',
            num: '1',
            price: '$ 9.00'
        }, {
            url:'../Data/Image 106.png',
            des:'Orange ThaiLand',
            num: '1',
            price: '$ 8.00'
        }, {
            url:'../Data/Image 103.png',
            des:'Avacado VietNam',
            num: '1',
            price: '$ 10.00'
        },
        
    ]

    return (
        <>
           <div>
                <Image source={require('../Data/Image 183.png')}></Image>
           </div>
           <h1 style={{color:'#52de81',fontWeight:'300'}}>My Basket</h1>

           <div style={{overflow:'scroll',display:'flex',flexDirection:'column',alignContent:'center',width:'90%',height:'100%',margin:'20px'}}>
               {
                    data.map((value) => (
                        <div style={{display:'flex',justifyContent:'space-around',padding:'3px',backgroundColor:'#fff',width:'100%',height:'60px',borderRadius:'5px',marginBottom:'10px'}}>
                    <img style={{ height:'100%',width:'50px'}} src={value.url}></img>
                    <div style={{display:'flex',flexDirection:'column'}}>
                            <span style={{color:'#65e490'}}>{value.price}</span>
                            <span>{value.des}</span>
                            <div style={{display:'flex'}}>
                                <Image source={require('../Data/Image 180.png')}></Image>
                                <Image source={require('../Data/Image 180.png')}></Image>
                                <Image source={require('../Data/Image 180.png')}></Image>
                                <Image source={require('../Data/Image 180.png')}></Image>
                                <Image source={require('../Data/Image 180.png')}></Image>
                            </div>
                    </div>

                    <div style={{display:'flex',alignItems:'center'}}>
                        <Image source={require('../Data/Image 176.png')}></Image>
                        <span style={{marginLeft:'10px',marginRight:'10px'}}>{value.num}</span>
                        <Image source={require('../Data/Image 175.png')}></Image>

                    </div>
               </div>
                    ))
               }
           </div>

           <div style={{width:"100%",height:'1px',backgroundColor:'#000'}}></div>

          <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
               <div style={{display:'flex'}}>
                   <h3 style={{color:'#9a74e6',margin:'20px',marginRight:'180px'}}>Total: </h3>
                   <h3 style={{color:'#9a74e6',margin:'20px'}}>$ 128.00</h3>
               </div>
    
               <button style={{width:'300px',height:'50px',color:'#fff',backgroundColor:'#1dd75b',outline:'none',borderRadius:'20px',border:'none'}}>Payment</button>
          </div>
        </>
    )
}

export default Screen_03