import Button from "./Button";

const ContactForm = ({ handleSendEmailSubmit, isLoading, form }) => {
  return (
    <form
      className="flex flex-col gap-8"
      ref={form}
      onSubmit={handleSendEmailSubmit}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="inputStyle"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="inputStyle"
          required
        />
      </div>

      <input
        type="text"
        name="subject"
        placeholder="Betreff"
        className="inputStyle"
        required
      />

      <textarea
        rows="6"
        name="message"
        placeholder="Nachricht"
        className="inputStyle"
        required
      ></textarea>

      <div className="form-checkbox flex items-center mb-4">
        <input
          required
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 after:content-['*'] after:text-red-600"
        >
          Ich akzeptiere, dass die von mir in diesem Formular übermittelten
          Daten gespeichert werden können.
        </label>
      </div>

      <div className="form__submit-button">
        <Button typeof="submit" text="Senden" isLoading={isLoading} />
      </div>
    </form>
  );
};

export default ContactForm;
