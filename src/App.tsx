import React from 'react';

function Hello() {
  const myArray = [
    { a: 'apple', c: 'text-green-300' },
    { a: 'grapes', c: 'text-purple-300' },
    { a: 'orange', c: 'text-orange-500' },
  ];
  console.log(myArray);
  const myList = myArray.map((item) => (
    <p className={`text-xl ${item.c}`}>{item.a}</p>
  ));

  return myList;
}

export function App() {
  return (
    <>
      <Hello />
      <div className="text-3xl text-purple-800 text-center mt-6">
        Hello World
      </div>
    </>
  );
}
