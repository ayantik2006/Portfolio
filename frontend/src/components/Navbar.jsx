import { useState } from "react";
import { Drawer, Button, List, ListItem, ListItemText } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate=useNavigate();
  const toggleDrawer = (state) => () => {
    setOpen(state);
  };
  const list = (
    <div
      className="w-64 h-full p-4 bg-[#0f0f0f] border-1 border-l-[#524f4f]"
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List className="">
        {["Home", "About me", "My Skills", "Projects", "Contact"].map(
          (text) => (
            <ListItem
              button
              key={text}
              className="text-white"
              onClick={() => {
                if(text==="About me"){
                  navigate("/about");
                }
                else if(text==="Home"){
                  navigate("/");
                }
                else if(text==="My Skills"){
                  navigate("/skills");
                }
                else if(text==="Projects"){
                  navigate("/projects");
                }
                else if(text==="Contact"){
                  navigate("/contact")
                }
              }}
            >
              <ListItemText
                primary={text}
                slotProps={{
                  primary: {
                    sx: {
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#211f1f",
                      },
                      padding:"0.7rem",
                      paddingY:"0.5rem",
                      borderRadius:"2rem"
                    },
                  },
                }}
              />
            </ListItem>
          )
        )}
      </List>
    </div>
  );
  return (
    <div className="">
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        disablePortal
        className=""
      >
        {list}
      </Drawer>

      <div
        className="w-[40rem] h-[4rem] bg-[#ffffff1c] mt-5 rounded-[2rem] backdrop-blur-[3px] border- border-white shadow-[0_0_2px_white] flex gap-5 items-center justify-center"
        id="navbar"
      >
        <div className="text-[1.25rem] text-white font-semibold hover:bg-black px-3 py-1 rounded-[2rem] cursor-pointer duration-300 font-mono">
          <Link to="/">Home</Link>
        </div>
        <div className="text-[1.25rem] text-white font-semibold hover:bg-black px-3 py-1 rounded-[2rem] cursor-pointer duration-300 font-mono">
          <Link to="/about">About me</Link>
        </div>
        <div className="text-[1.25rem] text-white font-semibold hover:bg-black px-3 py-1 rounded-[2rem] cursor-pointer duration-300 font-mono">
          <Link to="/skills">My Skills</Link>
        </div>
        <div className="text-[1.25rem] text-white font-semibold hover:bg-black px-3 py-1 rounded-[2rem] cursor-pointer duration-300 font-mono">
          <Link to="/projects">Projects</Link>
        </div>
        <div className="text-[1.25rem] text-white font-semibold hover:bg-black px-3 py-1 rounded-[2rem] cursor-pointer duration-300 font-mono">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div
        className="text-white flex items-center justify-center mt-8 mr-5 hover:bg-[#302f2f] rounded-full w-9 h-9 duration-300"
        id="hamburger"
        onClick={() => setOpen(true)}
      >
        <i className="fa-solid fa-burger text-[1.5rem] text-pink-300"></i>
      </div>
    </div>
  );
}

export default Navbar;
