import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  ImageList,
  ImageListItem,
  Divider
} from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import dataBro from "../assets/img/data-bro.svg";
import Resumeamico from "../assets/img/Resume-amico.svg";
import amicon from "../assets/img/Profiling-amico.svg";
import images from "../assets/img/imagenes";

const ScrollAnimation = ({ children, direction = "left", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "bottom" ? 50 : direction === "top" ? -50 : 0,
      scale: direction === "scale" ? 0.9 : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, delay },
    },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={variants}>
      {children}
    </motion.div>
  );
};

const Home = () => {
  const [expanded, setExpanded] = useState(false);

  const shortText =
    "Es una herramienta diseñada para facilitar la creación de currículums optimizados para los sistemas de seguimiento de candidatos (ATS). A través de un formulario intuitivo, los usuarios pueden ingresar su información profesional y generar automáticamente un CV en formato ATS.";

  const fullText =
    "Es una herramienta diseñada para facilitar la creación de currículums optimizados para los sistemas de seguimiento de candidatos (ATS). A través de un formulario intuitivo, los usuarios pueden ingresar su información profesional y generar automáticamente un CV en formato ATS, buscando garantizar que cumpla con los requisitos de los filtros de selección utilizados por las empresas. Además, ofrece distintos formatos seleccionables para adaptarse a diferentes perfiles y necesidades laborales.";

  return (
    <Container maxWidth="lg" sx={{ py: 4, px: 3, mt: "40px", overflow: "hidden", boxShadow: 0 }}>
      
      {/* Sección 1 - Izquierda a Derecha */}
      <ScrollAnimation direction="left">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Paper elevation={3} sx={{ p: 3, width: "90%" }}>
              <Typography variant="h4" sx={{ fontFamily: "auto", paddingBottom: "2%" }}>EasyHire CV</Typography>
              
              {/* Texto colapsable en móvil */}
              <Typography sx={{ fontFamily: "monospace", fontSize: "1rem", textAlign: "justify" }} variant="h6">
                {expanded ? fullText : shortText}
              </Typography>

              {/* Botón para expandir/contraer */}
              <Button variant="text" sx={{ mt: 1 }} onClick={() => setExpanded(!expanded)}>
                {expanded ? "Ver menos" : "Ver más"}
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 3, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={dataBro} alt="Descripción" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
            </Paper>
          </Grid>
          <Divider sx={{ borderBottomWidth: 2, width: "100%", boxShadow: "0px 4px 10px rgb(0 35 215)"}} />
        </Grid>
      </ScrollAnimation>

      {/* Sección 2 - Derecha a Izquierda */}
      <ScrollAnimation direction="right" delay={0.2}>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Paper elevation={1} sx={{ p: 3, width: "90%" }}>
              <Typography variant="h5" sx={{ fontFamily: "auto", paddingBottom: "2%" }}>Objetivo</Typography>
              <Typography variant="h6" sx={{ fontFamily: "monospace", fontSize: "1rem", textAlign: "justify" }}>
                El objetivo de EasyHire CV es simplificar el proceso de creación de currículums y mejorar las posibilidades de los candidatos en los procesos de selección automatizados. Al ofrecer plantillas optimizadas para ATS, buscamos reducir la frustración de los usuarios al postularse a empleos y aumentar sus oportunidades de ser considerados en los reclutamientos.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 3, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={Resumeamico} alt="Descripción" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
            </Paper>
          </Grid>
          <Divider sx={{ borderBottomWidth: 2, width: "100%", boxShadow: "0px 4px 10px rgb(0 35 215)"}} />
        </Grid>
      </ScrollAnimation>

      {/* Sección 3 - Aparece desde Abajo */}
      <ScrollAnimation direction="bottom" delay={0.4}>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Paper elevation={1} sx={{ p: 3, width: "90%" }}>
              <Typography variant="h5" sx={{ fontFamily: "auto", paddingBottom: "2%" }}>Formatos</Typography>
              <ImageList cols={2} gap={8} sx={{ width: "100%", maxHeight: 300 }}>
                {images.map((item, index) => (
                  <ImageListItem key={index} sx={{
                    border: "2px solid #ccc",
                    borderRadius: "8px",
                    padding: "5px",
                    backgroundColor: "#fff",
                  }}>
                    <img src={item.src} alt={item.alt} style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                  </ImageListItem>
                ))}
              </ImageList>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 3, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={amicon} alt="Descripción" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
            </Paper>
          </Grid>
        </Grid>
      </ScrollAnimation>

      {/* Sección 4 - Aparece con Escala */}
      <ScrollAnimation direction="scale" delay={0.3}>
        <Paper elevation={3} sx={{ p: 4, mt: 4, maxWidth: "600px", mx: "auto" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Contacto</Typography>
          <TextField fullWidth label="Correo electrónico" variant="outlined" sx={{ mb: 2 }} />
          <TextField fullWidth label="Sugerencias o comentarios" variant="outlined" multiline rows={3} sx={{ mb: 2 }} />
          <Button variant="contained">Enviar</Button>
        </Paper>
      </ScrollAnimation>

    </Container>
  );
};

export default Home;
