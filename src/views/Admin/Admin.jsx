const Admin = () => {
  function esMovil() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  console.log(esMovil)
  return (
    <div className="min-h-screen ">
      <div className="flex">
        <div className="w-[65px]">
          <nav className="w-[65px] fixed z-10 top-0 flex flex-col gap-1 h-screen bg-gray-300">
            <div className="flex justify-between h-[72px] p-5">
              <button className="w-[28px] h-[28px] rounded-sm flex items-center justify-center">
                <span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1 4C1 3.44772 1.44772 3 2 3H14C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14
                    5H2C1.44772 5 1 4.55228 1 4Z" fill="currentColor"></path><path d="M1 8C1 7.44772 1.44772 7 2 7H14C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H2C1.44772 9 1 8.55228
                    1 8Z" fill="currentColor"></path><path d="M1 12C1 11.4477 1.44772 11 2 11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H2C1.44772 13 1
                    12.5523 1 12Z" fill="currentColor"></path></svg>
                </span>
              </button>
            </div>
          </nav>
        </div>
        <div className="flex flex-1 min-h-screen flex-col"></div>
      </div>
    </div>
  )
}

export default Admin
