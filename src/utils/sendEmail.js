// src/utils/sendEmail.js
import emailjs from '@emailjs/browser';

// Fonction utilitaire pour convertir un fichier en base64
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve("");
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

const sendEmail = async (formData) => {
  try {
    // Convertir les fichiers en base64 pour EmailJS
    const diplomaBase64 = await fileToBase64(formData.diplomaFile);
    const birthCertBase64 = await fileToBase64(formData.birthCertificate);

    // Préparer les données à envoyer
    const templateParams = {
      type: formData.type || "",
      selectedFil: formData.selectedFil || "",
      selectedCategory: formData.selectedCategory || "",
      selectedTime: formData.selectedTime || "",

      gender: formData.gender || "",
      lastName: formData.lastName || "",
      firstName: formData.firstName || "",
      phone: formData.phone || "",
      birthDate: formData.birthDate || "",
      birthPlace: formData.birthPlace || "",
      email: formData.email || "",

      fatherName: formData.fatherName || "",
      fatherOccupation: formData.fatherOccupation || "",
      fatherPhone: formData.fatherPhone || "",
      motherName: formData.motherName || "",
      motherOccupation: formData.motherOccupation || "",
      motherPhone: formData.motherPhone || "",

      lastDiploma: formData.lastDiploma || "",
      graduationYear: formData.graduationYear || "",
      lastInstitution: formData.lastInstitution || "",
      candidateStatus: formData.candidateStatus || "",

      motivationLetter: formData.motivationLetter || "Non fournie",

      diplomaFileBase64: diplomaBase64,       // fichier converti en base64
      birthCertificateBase64: birthCertBase64 // fichier converti en base64
    };

    const response = await emailjs.send(
      'service_uhuvh67',     // ton service EmailJS
      'template_bo4meum',    // ton template EmailJS
      templateParams,
      'UEskgPRVfNfOXQ72O'   // ta clé publique EmailJS
    );

    console.log('Email envoyé avec succès :', response.status, response.text);
    return true;

  } catch (error) {
    console.error('Erreur lors de l’envoi de l’email :', error);
    return false;
  }
};

export default sendEmail;
