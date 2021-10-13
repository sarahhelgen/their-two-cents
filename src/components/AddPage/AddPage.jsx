


function AddPage() {


    return (

        <form>
            <select>
            <option>Media</option>
            <option>Business</option>
            <option>Product </option>
            <option>Other</option>
            </select>
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Type"></input>
            <input type="text" placeholder="Notes"></input>
            <button>Submit</button>
        </form>
    )

}
export default AddPage;