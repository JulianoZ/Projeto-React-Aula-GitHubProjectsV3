function MainContent(){
return(

 
 /*
<main className="flex-grow p-2 bg-blue-600 flex flex-wrap justify-center gap-2">
  <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 bg-blue-200 p-2">Coluna 1</div>
  <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 bg-blue-200 p-2">Coluna 2</div>
  <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 bg-blue-200 p-2">Coluna 3</div>
  <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 bg-blue-200 p-2">Coluna 4</div>
  
  <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 bg-blue-200 p-2">Coluna 5</div>
  <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 bg-blue-200 p-2">Coluna 6</div>
  <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 bg-blue-200 p-2">Coluna 7</div>
  <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 bg-blue-200 p-2">Coluna 8</div>
</main>
*/



<main className="flex-1 p-2 bg-blue-600 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2">
  <div className="bg-blue-200 p-2">Coluna 1</div>
  <div className="bg-blue-200 p-2">Coluna 2</div>
  <div className="bg-blue-200 p-2">Coluna 3</div>
  <div className="bg-blue-200 p-2">Coluna 4</div>
  <div className="bg-blue-200 p-2">Coluna 5</div>
  <div className="bg-blue-200 p-2">Coluna 6</div>
  <div className="bg-blue-200 p-2">Coluna 7</div>
  <div className="bg-blue-200 p-2">Coluna 8</div>
  <div className="bg-blue-200 p-2">Coluna 9</div>
  <div className="bg-blue-200 p-2">Coluna 10</div>
  <div className="bg-blue-200 p-2">Coluna 11</div>
  <div className="bg-blue-200 p-2">Coluna 12</div>  

</main>




/*
<main className="flex-grow p-2 bg-gray-100 flex flex-wrap gap-2">
  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 1</div>
  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 2</div>
  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 3</div>
  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 4</div>

  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 5</div>
  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 6</div>
  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 7</div>
  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 8</div>
</main>
*/


/*1fr: Ocupa 1 fração do espaço restante (~10%). 4fr: Ocupa 4 frações do espaço restante (~40%).*/
/*
<main className="flex-1 p-2 bg-blue-600 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-[2fr_2fr_2fr_2fr] gap-2">
    <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 1</div>
  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 2</div>
  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 3</div>
  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 4</div>

  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 5</div>
  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 6</div>
  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 7</div>
  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 8</div>
</main>
*/



/*
<main className="flex-1 h-full p-2 bg-blue-600 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-2">
    <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 1</div>
  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 2</div>
  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 3</div>
  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 4</div>

  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 5</div>
  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 6</div>
  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 7</div>
  <div className="flex-[0_0_calc(25%-0.5rem)] bg-blue-200 p-2">Coluna 8</div>
</main>
*/


)
}export default MainContent;