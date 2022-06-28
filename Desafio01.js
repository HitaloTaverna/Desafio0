import { View } from "react-native";

export const Desafio01 =()=> {
    return (
      <View style= {{flex: 1}} >
                  {/* retângulo superio */}
          <View style={{flex: 0.6,justifyContent: 'flex-start'}}>
              <View style={{width:'100%', height: 25, backgroundColor: "#50E3C2" }}/>
          </View>
                  {/* 1° Quadrado */}
          <View style= {{flex: 1.4, alignItems: 'center', justifyContent: 'flex-end'}}>
            <View style= {{ width:100,height: 100, backgroundColor:"#F5A623"}}/> 
         </View>

               {/* 1° retângulo */}
      <View style= {{flex: 0.60, alignItems: 'center', justifyContent: 'center' }}>
            <View style= {{width:140,height: 30, backgroundColor:"#F5A623" }}/> 
      </View>

                           {/* 2°, 3°, 4° retângulos */}
      <View style= {{flex:1}}>    
      <View style= {{flex: 0.01, justifyContent:'space-between', alignItems: 'flex-end'}}>
            <View style= {{ width: '50%', height: 50, backgroundColor:"#4A90E2" }}/> 
      </View>
            <View style= {{width: '50%', height: 50, backgroundColor:"#9013FE"}}/>  
            <View style= {{flexDirection: 'row-reverse'}}>
      </View>
            <View style= {{ height: 13, backgroundColor:"#50E3C2"}}/> 
      </View>

                  {/* Todos os quadrados */}
      <View style={{flex:6}}>
          <View style = {{flex:1, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}>
              <View style= {{width: 100, height: 100, backgroundColor: "#F5A623"}}/>
              <View style= {{width: 100, height: 100, backgroundColor: "#F5A623"}}/>
              <View style= {{width: 100, height: 100, backgroundColor: "#F5A623"}}/>
      </View>
          <View style = {{flex:1, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}>
              <View style= {{width: 100, height: 100, backgroundColor: "#F5A623"}}/>
              <View style= {{width: 100, height: 100, backgroundColor: "#F5A623"}}/>
              <View style= {{width: 100, height: 100, backgroundColor: "#F5A623"}}/>
      </View>
                  {/* retângulo inferior*/}
      <View style= {{flex: 0, justifyContent:'space-between'}}>
            <View style= {{width: '100%', height: 50, backgroundColor:"#4A90E2" }}/> 
      </View>

      </View>
          

         

      </View>
      
    );
  }