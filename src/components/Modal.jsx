import PropTypes from 'prop-types';

function Modal({ onClose, children }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
            <div className="relative bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto overflow-hidden">
                <button 
                    className="absolute top-2 right-2 text-black font-bold text-2xl"
                    onClick={onClose}
                >
                    &times; {/* Close button */}
                </button>
                <div className="max-h-[90vh] overflow-y-auto pr-4">
                    {children}
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;
