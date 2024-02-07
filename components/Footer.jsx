/** @format */
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  return (
    <>
      <div className='grid grid-cols-3 text-left place-items-center '>
        <div>
          <div>Explore</div>
          <div>Menu</div>
          <div>Locations</div>
          <div>Reviews</div>
        </div>
        <div>
          <div>Follow</div>
          <div>Instagram</div>
          <div>Twitter</div>
          <div>Facebook</div>
        </div>
        <div>
          <div>Legal</div>
          <div>Privacy</div>
          <div>Terms</div>
          <div>Cookies</div>
        </div>
      </div>
      {/*  */}
      <div className='pt-4'>
        <div className='flex flex-row flex-wrap justify-center pb-2 gap-x-4'>
          <div>
            <XIcon />
          </div>
          <div>
            <InstagramIcon />
          </div>
          <div>
            <FacebookIcon />
          </div>
          <div>
            <WhatsAppIcon />
          </div>
        </div>
        <div className='flex justify-center'>
          © 2024 FeastBox. All rights reserved.
        </div>
      </div>
    </>
  );
}
