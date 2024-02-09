"use client"

const DropdownItem = ({ itemName }) => {
    return (
        <a
            href="#"
            className="block px-4 py-3  hover:text-[rgb(255,93,34)]"
        >
            {itemName}
        </a>
    );
};

const NavSm = ({ props }) => {
    return (
        <div className="font-bold text-[#221638] p-4" >
            <button
                className="px-1 py-2 flex items-center justify-center flex-wrap rounded-md  hover:text-[rgb(255,93,34)]"
            >
                {props.name}
            </button>
            <div className="border shadow-lg">
                {
                    props.itemName.map((ele, index) => {
                        return (
                            <DropdownItem key={index} itemName={ele} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default NavSm