
function Header()
{
    return <>
    <div className="relative flex justify-center item-center gap-5">
  <div class="flex justify-center items-center pt-5">
    <div class="absolute animate-spin rounded-md h-16 w-16 border-4  border-emerald-500"></div>
    <img
                  src="src/assets/cricket.png"
                  class="rounded-full h-14 w-14 animate-horizontal-spin"
                />
  </div>
  <span className="font-Blaka text-5xl text-white-800 pt-6">Gully scorer</span>
  </div>
    </>
}

export default Header;