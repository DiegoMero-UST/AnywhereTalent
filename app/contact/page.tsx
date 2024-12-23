
export default function Home() {
    return (
        <section className="pl-60 pr-60 pt-20">
            <h2 className="text-6xl font-bold text-center pt-16 pb-5">Let&apos;s get started</h2>
            <h3 className="text-xl text-center pb-20 pt-10">Tell us about the role you&apos;re looking to fill.</h3>
            <form className="p-10 border border-slate-400 rounded-3xl shadow-lg ">
                <div className="grid grid-cols-2 gap-10">
                    <div className="flex flex-col">
                        <label className="text-xl pl-2">First Name</label>
                        <input type="text" id="fname" className="p-2 border-slate-400 border rounded-xl hover:border-[#42c567]" pattern="[A-Za-z]{1,64}" required maxLength={100} placeholder="James"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xl pl-2">Last Name</label>
                        <input type="text" id="lname" className="p-2 border-slate-400 border rounded-xl hover:border-[#42c567]" pattern="[A-Za-z]{1,64}" required maxLength={100} placeholder="Dean"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xl pl-2">Email</label>
                        <input type="email" id="mail" className="p-2 border-slate-400 border rounded-xl hover:border-[#42c567]" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$" required maxLength={100} placeholder="your@email.com"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xl pl-2">Phone Number</label>
                        <input type="text" id="pnumber" className="p-2 border-slate-400 border rounded-xl hover:border-[#42c567]" pattern="[0-9]{3} [0-9]{3}-[0-9]{4}" placeholder="904 111-1111" maxLength={12}></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xl pl-2">Company Name</label>
                        <input type="text" id="cname" className="p-2 border-slate-400 border rounded-xl hover:border-[#42c567]"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xl pl-2">Where did you hear about us?</label>
                        <select name="field" id="field" className="p-2 border border-slate-400 rounded-xl hover:border-[#42c567]">
                            <option>Select</option>
                            <option value="Google">Google</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Linkedin">Linkedin</option>
                            <option value="Referral">Referral</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col pt-10">
                    <label className="text-xl pl-2">Tell us a little bit about the role(s) you are hiring for.</label>
                    <textarea className="pl-2 border-slate-400 border rounded-xl h-64 hover:border-[#42c567]" placeholder="Tell us a little bit about the role(s) you are hiring for."></textarea>
                </div>
                <div className="pt-5 flex flex-col items-center">
                    <button type='submit' className="text-2xl transition easy-in-out bg-[#0A8D94] hover:-translate-y-1 hover:scale-110 hover:bg-cyan-700 pl-10 pr-10 pt-5 pb-5 text-white rounded-xl">Submit</button>
                </div>
            </form>
            <div className="flex flex-col items-center p-20 gap-5">
                <h2 className="text-3xl font-bold pt-10 pb-5">Contact our team directly</h2>
                <p className="text-xl text-center">Need assistance? Reach out to our team, and we&apos;ll get back to you with <br />the information or support you need as soon as possible!</p>
                <div className="border rounded-3xl flex p-10 mt-14 gap-5 justify-center items-center transition easy-in-out hover:-translate-y-1 hover:scale-110 shadow-2xl cursor-pointer">
                    
                    <img src="https://cdn.prod.website-files.com/66e84fbba763c640a1c7496e/66e84fbba763c640a1c74a2c_Icon%20talent%20support.svg" alt="email" height={80} width={80} />
                    <div>
                        <h3 className="font-bold">General Support</h3>
                        <h4 className="text-green-500">help@anywheretalent.com</h4>
                    </div>

                </div>
            </div>
        </section>
    );
}