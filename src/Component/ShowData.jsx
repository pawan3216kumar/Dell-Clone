import { Data2 } from "../Data/Data1";

const ShowData = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 p-5 bg-slate-700">
        {Data2.map((ele , i) => (
          <div key = {i} className="bg-slate-500">
            <div className=" w-1/2 bg-black text-slate-200 justify-start text-xl"><h2>{ele.title}</h2></div>
            <div ><img src={ele.image} height={400} width={400} /></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShowData
