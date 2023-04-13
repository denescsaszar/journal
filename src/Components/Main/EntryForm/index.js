import "./EntryForm.css";

export default function EntryForm() {
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
