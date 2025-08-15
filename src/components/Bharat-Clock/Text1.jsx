function Text1() {
    let time = new Date();
    // console.log(time.toLocaleDateString());
    return <div>
        <p className="text-center text-white">This is the clock that shows the time in Bharat at all times</p>
        <p className="text-center text-white">This is Current Time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    </div>
}

export default Text1;