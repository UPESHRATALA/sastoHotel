const ModalPopup = () => {
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <form method="dialog" className="modal-box">
        <h3 className="text-base font-medium text-[#222222]">
          Security camera(s)
        </h3>
        <p className="py-4 text-sm text-[#717171]">
          Hosts are required to disclose all security cameras and other
          recording devices in their listings. Intentionally concealed recording
          devices, or devices that observe the interior of bedrooms and
          bathrooms, are prohibited.
        </p>
        <h3 className="text-base font-medium text-[#222222]">Weapons</h3>
        <p className="py-4 text-sm text-[#717171]">
          All weapons at a listing must be properly disclosed, stored and
          secured
        </p>
        <h3 className="text-base font-medium text-[#222222]">
        Haunted Room
        </h3>
        <p className="py-4 text-sm text-[#717171]">
          Step into the unknown. This room is known for its eerie atmosphere, with
          strange occurrences and unexplained sounds. Guests should be aware that there 
          may be supernatural entities or spooky effects that are part of the haunted experience.
          While the hotel ensures safety, it is recommended to be prepared for a spine-chilling stay.
        </p>

        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn">Close</button>
        </div>
      </form>
    </dialog>
  );
};

export default ModalPopup;
