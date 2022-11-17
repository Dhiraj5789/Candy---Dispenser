import React from "react";

// Example 1
// There's one situation when this isn't a practical solution:
// If bar or baz are (non-primitive) objects/arrays/functions/etc:
// This is precisely the reason why useCallback and useMemo exist.
// So here's how you'd fix that (all together now):

function Foo({ bar, baz }) {
  React.useEffect(() => {
    const options = { bar, baz };
    console.log(options);
  }, [bar, baz]);
  return <div>foobar</div>;
}

export function Blub() {
  const bar = React.useCallback(() => {}, []);
  const baz = React.useMemo(() => [1, 2, 3], []);
  return <Foo bar={bar} baz={baz} />;
}

// Example 2

const CountButton = React.memo(function CountButton({ onClick, count }) {
  return <button onClick={onClick}>{count}</button>;
});

export function DualCounter() {
  const [count1, setCount1] = React.useState(0);
  const increment1 = React.useCallback(() => setCount1((c) => c + 1), []);

  const [count2, setCount2] = React.useState(0);
  const increment2 = React.useCallback(() => setCount2((c) => c + 1), []);

  return (
    <>
      <CountButton count={count1} onClick={increment1} />
      <CountButton count={count2} onClick={increment2} />
    </>
  );
}
