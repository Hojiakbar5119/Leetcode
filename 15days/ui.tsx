import axios from 'axios';

// API Gateway endpoint va zaruriy ma'lumotlarni sozlang
const apiUrl = "https://YOUR_API_GATEWAY_ID.execute-api.region.amazonaws.com/workflow";

const startWorkflow = async () => {
  try {
    const response = await axios.post(apiUrl, {
      // Kerakli ma'lumotlar, masalan, loyiha holati
      projectId: "12345",
      status: "Boshlash",
    });

    console.log("Workflow ishga tushirildi:", response.data);
  } catch (error) {
    console.error("Workflow ishga tushirishda xatolik:", error);
  }
};

function App() {
  return (
    <div>
      <h1>Loyiha jarayonini boshqarish</h1>
      <button onClick={startWorkflow}>Workflowni ishga tushirish</button>
    </div>
  );
}

export default App;
