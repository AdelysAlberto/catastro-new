CREATE TABLE IF NOT EXISTS `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;


CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(25) NOT NULL,
  `fkStatus` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY ('fkStatus') REFERENCES status (id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;


CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cedula` varchar(16) NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastname` varchar(50),
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `fkRol` int(11) NOT NULL,
  `fkStatus` int(11) NOT NULL,
  PRIMARY KEY (`id`),
   FOREIGN KEY ('fkRol') REFERENCES roles(id),
   FOREIGN KEY ('fkStatus') REFERENCES status (id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2;


CREATE TABLE IF NOT EXISTS `tenencias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tenencia` varchar(16) NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7;


CREATE TABLE IF NOT EXISTS `topografias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `topografia` varchar(16) NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7;


CREATE TABLE IF NOT EXISTS `formas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `forma` varchar(16) NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7;


CREATE TABLE IF NOT EXISTS `ocupantes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fkDocumento` int(11) NOT NULL,
  `habitado` varchar(16) NOT NULL,
  `fecha_contrato` varchar(16) NOT NULL,
  `cant_hab` varchar(16) NOT NULL,
  `renta` varchar(16) NOT NULL,
  `ingreso_familiar` varchar(16) NOT NULL,
   PRIMARY KEY (`id`),
    FOREIGN KEY ('fkDocumento') REFERENCES documentos (id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7;


CREATE TABLE IF NOT EXISTS `datos_terreno` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fkDocumento` int(11) NOT NULL,
  `fkTopografia` int(11) NOT NULL,
  `fkForma` int(11) NOT NULL,
  `fkTenencia` int(11) NOT NULL,
  `frente` float(8) NOT NULL,
  `profundidad` float(8) NOT NULL,
  `area` float(8) NOT NULL,
  `frente_tipo` varchar(12) NOT NULL,
  `prof_tipo` varchar(12) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY ('fkDocumento') REFERENCES documentos (id)
    FOREIGN KEY ('fkTopografia') REFERENCES topografias (id)
    FOREIGN KEY ('fkForma') REFERENCES formas (id)
    FOREIGN KEY ('fkTenencia') REFERENCES tenencias (id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;


CREATE TABLE IF NOT EXISTS `inmueble_docs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fkDocumento` int(11) NOT NULL,
  `folio` varchar(12) NOT NULL,
  `tomo` varchar(12) NOT NULL,
  `foliodoc` varchar(12) NOT NULL,
  `protocolo` varchar(12) NOT NULL,
  `trimestre` varchar(12) NOT NULL,
  `fecha_folio` date NOT NULL,
  `superficie` varchar(15) NOT NULL,
  `monto` varchar(10) NOT NULL,
  `registro` varchar(25) NOT NULL,
  `dir_registro` text NOT NULL,
  PRIMARY KEY (`id`),
    FOREIGN KEY ('fkDocumento') REFERENCES documentos (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `inmueble_ubi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fkDocumento` int(11) NOT NULL,
  `norte` text NOT NULL,
  `mts_norte` varchar(10) NOT NULL,
  `sur` text NOT NULL,
  `mts_sur` varchar(10) NOT NULL,
  `este` text NOT NULL,
  `mts_este` varchar(10) NOT NULL,
  `oeste` text NOT NULL,
  `mts_oeste` varchar(10) NOT NULL,
  PRIMARY KEY (`idDocumento`),
   FOREIGN KEY ('fkDocumento') REFERENCES documentos (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE IF NOT EXISTS `operaciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operacion` varchar(35) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

INSERT INTO `operaciones` (`id`, `operacion`) VALUES
(1, 'VENTA'),
(2, 'DONACION'),
(3, 'HERENCIA'),
(4, 'PERMUTA'),
(5, 'FOMENTACION DE MEJORAS');


CREATE TABLE IF NOT EXISTS `personas` (
  `cedula` char(14) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `direccion` text NOT NULL,
  `fkUser` int(11) NOT NULL,
  `idStatus` int(3) NOT NULL DEFAULT '1',
  PRIMARY KEY (`cedula`),
   FOREIGN KEY ('fkStatus') REFERENCES status (id),
    FOREIGN KEY ('fkUsuario') REFERENCES users (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



CREATE TABLE IF NOT EXISTS `tipousos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uso` varchar(50) NOT NULL,
  `detalle` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=22 ;

CREATE TABLE IF NOT EXISTS `documento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fkOperacion` int(11) NOT NULL,
  `fkPersona` char(12) NOT NULL,
  `fkTipoUso` int(11) NOT NULL,
  `descripcion` text NOT NULL,
   PRIMARY KEY (`id`),
    FOREIGN KEY ('fkOperacion') REFERENCES operaciones (id),
    FOREIGN KEY ('fkPersona') REFERENCES personas (id),
    FOREIGN KEY ('fkTipoUso') REFERENCES tipousos (id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11363 ;


CREATE TABLE IF NOT EXISTS `servicios` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
  `fkDocumento` int(11) NOT NULL,
  `acueducto` boolean DEFAULT false,
  `cloacas` boolean DEFAULT false,
  `electricidad_r` boolean DEFAULT false,
  `electricidad_i` boolean DEFAULT false,
  `telefono` boolean DEFAULT false,
  `transporte` boolean DEFAULT false,
  `alun_publico` boolean DEFAULT false,
  `vialidad` boolean DEFAULT false,
  `pavimento` boolean DEFAULT false,
  `acera` boolean DEFAULT false,
  `alumbrado` boolean DEFAULT false,
  `gas` boolean DEFAULT false,
  `internet` boolean DEFAULT false,
  `tvcable` boolean NOT NULL,
  PRIMARY KEY (`id`),
   FOREIGN KEY ('fkDocumento') REFERENCES documentos (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE IF NOT EXISTS `datos_construccion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fkDocumento` int(11),
  `destino` varchar(30),
  `tipo_pared` varchar(20),
  `tipo_acabado` varchar(20),
  `tipo_pintura` varchar(20),
  `techo_estructura` varchar(20),
  `techo_cubierta` varchar(20),
  `pisos` varchar(20),
  `ventanas` varchar(20),
  `puertas` varchar(20),
  `instalacion_elec` varchar(20),
  `anio_construccion` varchar(8),
  `anio_refaccion` varchar(8),
  `edad_efectiva`varchar(8),
  `nro_plantas` int(11),
  `nro_viviendas` int(11),
  `observaciones` text,
   PRIMARY KEY (`id`),
    FOREIGN KEY ('fkDocumento') REFERENCES documentos (id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS `complementos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fkDocumento` int(11),
  `ascensor` int(11),
  `aire_acondicionado` int(11),
  `rejas` int(11),
  `closets` int(11),
  `porcelana` int(11),
  `puertas` int(11),
  `baños` int(11),
  `cocina` int(11),
  `servicio` int(11),
  `oficina`int(11),
  `garage` int(11),
  `estacionamiento` int(11),
  `observaciones` text,
   PRIMARY KEY (`id`),
    FOREIGN KEY ('fkDocumento') REFERENCES documentos (id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;


CREATE TABLE IF NOT EXISTS `concepto` (
  `idConcepto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(35) NOT NULL,
  `idStatus` int(11) NOT NULL,
  PRIMARY KEY (`idConcepto`),
  KEY `idStatus` (`idStatus`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `pagos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idDocumento` int(11) NOT NULL,
  `idUt` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `idConcepto` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idDocumento` (`idDocumento`,`idUt`,`idUsuario`),
  KEY `idConcepto` (`idConcepto`),
  KEY `idUt` (`idUt`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;


CREATE TABLE IF NOT EXISTS `arquitectos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `isPrincipal` boolean not null,
  `name` varchar(60) NOT NULL,
  `lastname` int(11) NOT NULL,
  `phone` date NOT NULL,
  `address` int(11) NOT NULL,
  `fkStatus` int(11) NOT NULL,
  PRIMARY KEY (`id`),
    FOREIGN KEY ('fkStatus') REFERENCES status(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
