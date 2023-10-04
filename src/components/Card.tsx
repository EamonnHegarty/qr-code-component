import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import QRCode from "../assets/image-qr-code.png";

export default function MediaCard() {
  return (
    <Card
      sx={{
        maxWidth: 300,
        backgroundColor: "hsl(0, 0%, 100%)",
        textAlign: "center",
        borderRadius: 3,
      }}
    >
      <CardMedia
        sx={{ height: 250, margin: 2, borderRadius: 3 }}
        image={QRCode}
        title="QR Code to frontendmentor.io"
      />
      <CardContent>
        <Typography sx={{ paddingX: 1 }} gutterBottom variant="h6">
          Improve your front-end skills by building projects
        </Typography>
        <Typography sx={{ paddingX: 1 }} variant="body1" color="text.secondary">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </Typography>
      </CardContent>
    </Card>
  );
}
