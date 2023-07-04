export default function TestComponent({ name = "world" }) {
  return (
    <>
      <div>
        Hello, {name}!
        <p>This is pure JSX component</p>
      </div>
      <style jsx>{`
        div {
          background-color: #888;
          border-radius: 0.5em;
          color: #fff;
          margin-bottom: 1.5em;
          padding: 0.5em 0.75em;
        }
      `}</style>
    </>
  );
}
