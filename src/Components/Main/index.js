import "./main.css";

export default function Main() {
  return (
    <>
      <h2>Entry Form</h2>
      <form>
        <label htmlFor="motto">Motto</label>
        <input type="text" id="motto" name="motto" />
      </form>
    </>
  );
}
