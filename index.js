

    const  ajax = new XMLHttpRequest(); //reqeusicao a um site sem precisar acessar pelo navegador 
    ajax.open('GET', 'https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1030300.json') //abrir o site com o GET
    ajax.send()// enviar a solicitacao
    
    ajax.onload = function(){ //onload e quando ele carrega as informacoes do site
        for(let i = 0; i <= 5; i++){
            
        let obj = JSON.parse(this.responseText) //coverter para objeto
        let pais = obj.country
        let tmin = obj.data[i].tMin
        let tmax = obj.data[i].tMax
        let weatherType = obj.data[i].idWeatherType
        
        // Função para traduzir o código do tipo de tempo
        function getWeatherTypeName(code) {
            const weatherTypes = {
                1: "Céu limpo",
                2: "Pouco nublado", 
                3: "Parcialmente nublado",
                4: "Nublado",
                5: "Chuva fraca",
                6: "Chuva moderada",
                7: "Chuva forte",
                8: "Neve",
                9: "Neblina/Nevoeiro",
                10: "Aguaceiros",
                11: "Trovoada",
                12: "Granizo",
                13: "Ventania",
                14: "Tempestade",
                15: "Neblina matinal"
            };
            
            return weatherTypes[code] || `Código desconhecido: ${code}`;
        }
        
        let weatherTypeName = getWeatherTypeName(weatherType);
        
        //DATA
        const date = new Date()
        var result
        let diasemana = date.getDay() +i
        const diasDaSemana = ["Domingo", "Segunda-Feira", "Terca-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"]
        if(diasemana >= 6 ){
             result = diasemana - 7
            dataresult = diasemana
        }
        else{
            result = diasemana
        }
        //const mesEscrito = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
        //const dia = date.getDate()+i 
        //const ano = date.getFullYear()

        document.getElementById('pais'+i).innerHTML = `Pais:` + pais 
        document.getElementById('dia'+i).innerHTML = diasDaSemana[result] ; if(diasemana === 6){document.getElementById('dia'+i).innerHTML =  diasDaSemana[diasemana]}
        //document.getElementById('data'+i).innerHTML = "<br>Data: " + dia + "/" + mesEscrito[date.getMonth()+i] + "/" + ano //erro - problema nao solucionado
        document.getElementById('tmin'+i).innerHTML = "Temperatura Min: " + tmin + "ºC"
        document.getElementById('tmax'+i).innerHTML = "Temperatura Max: " + tmax + "ºC"
        document.getElementById('weatherType'+i).innerHTML = "Tipo de Tempo: " + weatherTypeName
        


        if(weatherType >= 1 && weatherType <=3 ){
            document.getElementById('img'+i).innerHTML = `<div class="NuvensLimpo"> </div>
                   <div class="ceu">
                    <div class="sol"></div>
                    <div class="nuvem1"></div>
                    <div class="nuvem2"></div>
                    <div class="nuvem3"></div>
                    <div class="nuvem4"></div>
                    <div class="nuvem5"></div>
                    <div class="nuvem6"></div>
                    <div class="nuvem7"></div> 
                    <div class="nuvem8"></div>
                    
                    
                    <div class="nuvem1B"></div>
                    <div class="nuvem2B"></div>
                    <div class="nuvem3B"></div>
                    <div class="nuvem4B"></div>
                    <div class="nuvem5B"></div>
                    <div class="nuvem6B"></div>
                    <div class="nuvem7B"></div>
                    <div class="nuvem8B"></div>
                    
                  
                    <div class="nuvem1C"></div>
                    <div class="nuvem2C"></div>
                    <div class="nuvem3C"></div>
                    <div class="nuvem4C"></div>
                    <div class="nuvem5C"></div>
                    <div class="nuvem6C"></div>
                    <div class="nuvem7C"></div>
                    <div class="nuvem8C"></div>
                    
                 
                    <div class="nuvem1D"></div>
                    <div class="nuvem2D"></div>
                    <div class="nuvem3D"></div>
                    <div class="nuvem4D"></div>
                    <div class="nuvem5D"></div>
                    <div class="nuvem6D"></div>
                    <div class="nuvem7D"></div>
                    <div class="nuvem8D"></div>
                    <div class="nuvem1E"></div>
                    <div class="nuvem2E"></div>
                    <div class="nuvem3E"></div>
                    <div class="nuvem4E"></div>
                    <div class="nuvem5E"></div>
                    <div class="nuvem6E"></div>
                    <div class="nuvem7E"></div>
                    <div class="nuvem8E"></div>
                    
                   
                    <div class="nuvem1F"></div>
                    <div class="nuvem2F"></div>
                    <div class="nuvem3F"></div>
                    <div class="nuvem4F"></div>
                    <div class="nuvem5F"></div>
                    <div class="nuvem6F"></div>
                    <div class="nuvem7F"></div>
                    <div class="nuvem8F"></div>
                </div>
                </div>`
                document.querySelector('.texto-capa1')
                .style.setProperty('--bg-color', '#3e64a6c7');
                document.querySelector('.texto-capa2')
                .style.setProperty('--bg-color', '#3e64a6c7');
                document.querySelector('.texto-capa3')
                .style.setProperty('--bg-color', '#3e64a6c7');
                document.querySelector('.texto-capa4')
                .style.setProperty('--bg-color', '#3e64a6c7');
                document.querySelector('.texto-capa5')
                .style.setProperty('--bg-color', '#3e64a6c7');
        }else if(weatherType >= 4 && weatherType <= 7){
            document.getElementById('img'+i).innerHTML = `<div class="NuvensNublado">
                <div class="ceuNublado">
                    <div class="solNublado"></div>
                    <div class="nuvem1Nublado"></div>
                    <div class="nuvem2Nublado"></div>
                    <div class="nuvem3Nublado"></div>
                    <div class="nuvem4Nublado"></div>
                    <div class="nuvem5Nublado"></div>
                    <div class="nuvem6Nublado"></div>
                    <div class="nuvem7Nublado"></div>
                    <div class="nuvem8Nublado"></div>
                    
                   
                    <div class="nuvem1BNublado"></div>
                    <div class="nuvem2BNublado"></div>
                    <div class="nuvem3BNublado"></div>
                    <div class="nuvem4BNublado"></div>
                    <div class="nuvem5BNublado"></div>
                    <div class="nuvem6BNublado"></div>
                    <div class="nuvem7BNublado"></div>
                    <div class="nuvem8BNublado"></div>
                    
                
                    <div class="nuvem1CNublado"></div>
                    <div class="nuvem2CNublado"></div>
                    <div class="nuvem3CNublado"></div>
                    <div class="nuvem4CNublado"></div>
                    <div class="nuvem5CNublado"></div>
                    <div class="nuvem6CNublado"></div>
                    <div class="nuvem7CNublado"></div>
                    <div class="nuvem8CNublado"></div>
                    
                    
                    <div class="nuvem1DNublado"></div>
                    <div class="nuvem2DNublado"></div>
                    <div class="nuvem3DNublado"></div>
                    <div class="nuvem4DNublado"></div>
                    <div class="nuvem5DNublado"></div>
                    <div class="nuvem6DNublado"></div>
                    <div class="nuvem7DNublado"></div>
                    <div class="nuvem8DNublado"></div>
                    <div class="nuvem1ENublado"></div>
                    <div class="nuvem2ENublado"></div>
                    <div class="nuvem3ENublado"></div>
                    <div class="nuvem4ENublado"></div>
                    <div class="nuvem5ENublado"></div>
                    <div class="nuvem6ENublado"></div>
                    <div class="nuvem7ENublado"></div>
                    <div class="nuvem8ENublado"></div>
                    
                    
                    <div class="nuvem1FNublado"></div>
                    <div class="nuvem2FNublado"></div>
                    <div class="nuvem3FNublado"></div>
                    <div class="nuvem4FNublado"></div>
                    <div class="nuvem5FNublado"></div>
                    <div class="nuvem6FNublado"></div>
                    <div class="nuvem7FNublado"></div>
                    <div class="nuvem8FNublado"></div>
                    
                   
                    <div class="nuvem1GNublado"></div>
                    <div class="nuvem2GNublado"></div>
                    <div class="nuvem3GNublado"></div>
                    <div class="nuvem4GNublado"></div>
                    <div class="nuvem5GNublado"></div>
                    <div class="nuvem6GNublado"></div>
                    <div class="nuvem7GNublado"></div>
                    <div class="nuvem8GNublado"></div>
                </div>
                </div>`
                document.querySelector('.texto-capa1')
                .style.setProperty('--bg-color', '#545253');
                document.querySelector('.texto-capa2')
                .style.setProperty('--bg-color', '#545253');
                document.querySelector('.texto-capa3')
                .style.setProperty('--bg-color', '#545253');
                document.querySelector('.texto-capa4')
                .style.setProperty('--bg-color', '#545253');
                document.querySelector('.texto-capa5')
                .style.setProperty('--bg-color', '#545253');
            
        }
        }
    }

