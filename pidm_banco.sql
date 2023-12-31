toc.dat                                                                                             0000600 0004000 0002000 00000017734 14525010772 0014456 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP           "            
    {            calendario_universitario    15.3    15.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                    0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                    0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                    1262    37931    calendario_universitario    DATABASE     �   CREATE DATABASE calendario_universitario WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
 (   DROP DATABASE calendario_universitario;
                postgres    false         �            1259    37956    agendas    TABLE     4  CREATE TABLE public.agendas (
    id_agenda bigint NOT NULL,
    id_aluno_agenda bigint NOT NULL,
    titulo_agenda character varying NOT NULL,
    descricao_agenda character varying NOT NULL,
    data_agenda date NOT NULL,
    concluido_agenda boolean NOT NULL,
    cor_agenda character varying NOT NULL
);
    DROP TABLE public.agendas;
       public         heap    postgres    false         �            1259    37955    agendas_id_agenda_seq    SEQUENCE     ~   CREATE SEQUENCE public.agendas_id_agenda_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.agendas_id_agenda_seq;
       public          postgres    false    219                    0    0    agendas_id_agenda_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.agendas_id_agenda_seq OWNED BY public.agendas.id_agenda;
          public          postgres    false    218         �            1259    37933    alunos    TABLE     �   CREATE TABLE public.alunos (
    id_aluno bigint NOT NULL,
    nome_aluno character varying NOT NULL,
    usuario_aluno character varying NOT NULL,
    senha_aluno character varying NOT NULL
);
    DROP TABLE public.alunos;
       public         heap    postgres    false         �            1259    37932    alunos_id_aluno_seq    SEQUENCE     |   CREATE SEQUENCE public.alunos_id_aluno_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.alunos_id_aluno_seq;
       public          postgres    false    215                    0    0    alunos_id_aluno_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.alunos_id_aluno_seq OWNED BY public.alunos.id_aluno;
          public          postgres    false    214         �            1259    37942    calendarios    TABLE     ^  CREATE TABLE public.calendarios (
    id_calendario bigint NOT NULL,
    id_aluno_calendario bigint NOT NULL,
    horario_calendario character varying NOT NULL,
    nome_disciplina_calendario character varying NOT NULL,
    nome_professor_calendario character varying,
    sala_calendario character varying,
    bloco_calendario character varying
);
    DROP TABLE public.calendarios;
       public         heap    postgres    false         �            1259    37941    calendarios_id_calendario_seq    SEQUENCE     �   CREATE SEQUENCE public.calendarios_id_calendario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.calendarios_id_calendario_seq;
       public          postgres    false    217                    0    0    calendarios_id_calendario_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.calendarios_id_calendario_seq OWNED BY public.calendarios.id_calendario;
          public          postgres    false    216         q           2604    37959    agendas id_agenda    DEFAULT     v   ALTER TABLE ONLY public.agendas ALTER COLUMN id_agenda SET DEFAULT nextval('public.agendas_id_agenda_seq'::regclass);
 @   ALTER TABLE public.agendas ALTER COLUMN id_agenda DROP DEFAULT;
       public          postgres    false    218    219    219         o           2604    37936    alunos id_aluno    DEFAULT     r   ALTER TABLE ONLY public.alunos ALTER COLUMN id_aluno SET DEFAULT nextval('public.alunos_id_aluno_seq'::regclass);
 >   ALTER TABLE public.alunos ALTER COLUMN id_aluno DROP DEFAULT;
       public          postgres    false    214    215    215         p           2604    37945    calendarios id_calendario    DEFAULT     �   ALTER TABLE ONLY public.calendarios ALTER COLUMN id_calendario SET DEFAULT nextval('public.calendarios_id_calendario_seq'::regclass);
 H   ALTER TABLE public.calendarios ALTER COLUMN id_calendario DROP DEFAULT;
       public          postgres    false    216    217    217                   0    37956    agendas 
   TABLE DATA           �   COPY public.agendas (id_agenda, id_aluno_agenda, titulo_agenda, descricao_agenda, data_agenda, concluido_agenda, cor_agenda) FROM stdin;
    public          postgres    false    219       3341.dat 	          0    37933    alunos 
   TABLE DATA           R   COPY public.alunos (id_aluno, nome_aluno, usuario_aluno, senha_aluno) FROM stdin;
    public          postgres    false    215       3337.dat           0    37942    calendarios 
   TABLE DATA           �   COPY public.calendarios (id_calendario, id_aluno_calendario, horario_calendario, nome_disciplina_calendario, nome_professor_calendario, sala_calendario, bloco_calendario) FROM stdin;
    public          postgres    false    217       3339.dat            0    0    agendas_id_agenda_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.agendas_id_agenda_seq', 4, true);
          public          postgres    false    218                    0    0    alunos_id_aluno_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.alunos_id_aluno_seq', 2, true);
          public          postgres    false    214                    0    0    calendarios_id_calendario_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.calendarios_id_calendario_seq', 2, true);
          public          postgres    false    216         w           2606    37963    agendas agendas_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.agendas
    ADD CONSTRAINT agendas_pkey PRIMARY KEY (id_agenda);
 >   ALTER TABLE ONLY public.agendas DROP CONSTRAINT agendas_pkey;
       public            postgres    false    219         s           2606    37940    alunos alunos_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.alunos
    ADD CONSTRAINT alunos_pkey PRIMARY KEY (id_aluno);
 <   ALTER TABLE ONLY public.alunos DROP CONSTRAINT alunos_pkey;
       public            postgres    false    215         u           2606    37949    calendarios calendarios_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public.calendarios
    ADD CONSTRAINT calendarios_pkey PRIMARY KEY (id_calendario);
 F   ALTER TABLE ONLY public.calendarios DROP CONSTRAINT calendarios_pkey;
       public            postgres    false    217         y           2606    37964    agendas fk_id_aluno_agenda    FK CONSTRAINT     �   ALTER TABLE ONLY public.agendas
    ADD CONSTRAINT fk_id_aluno_agenda FOREIGN KEY (id_aluno_agenda) REFERENCES public.alunos(id_aluno);
 D   ALTER TABLE ONLY public.agendas DROP CONSTRAINT fk_id_aluno_agenda;
       public          postgres    false    3187    215    219         x           2606    37950 "   calendarios fk_id_aluno_calendario    FK CONSTRAINT     �   ALTER TABLE ONLY public.calendarios
    ADD CONSTRAINT fk_id_aluno_calendario FOREIGN KEY (id_aluno_calendario) REFERENCES public.alunos(id_aluno);
 L   ALTER TABLE ONLY public.calendarios DROP CONSTRAINT fk_id_aluno_calendario;
       public          postgres    false    217    215    3187                                            3341.dat                                                                                            0000600 0004000 0002000 00000000162 14525010772 0014246 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        3	1	Prova de Teoria da Computação	Conteúdo: Autômatos Finitos Não Determinísticos	2021-06-30	t	#FF0000
\.


                                                                                                                                                                                                                                                                                                                                                                                                              3337.dat                                                                                            0000600 0004000 0002000 00000000111 14525010772 0014245 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Anderson Soares	andersonlbsoares	e8d95a51f3af4a3b134bf6bb680a213a
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                       3339.dat                                                                                            0000600 0004000 0002000 00000000071 14525010772 0014254 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	1	08:00	Teoria da Computação	Paulo de Tarso	1	1
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                       restore.sql                                                                                         0000600 0004000 0002000 00000016210 14525010772 0015367 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE calendario_universitario;
--
-- Name: calendario_universitario; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE calendario_universitario WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';


ALTER DATABASE calendario_universitario OWNER TO postgres;

\connect calendario_universitario

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: agendas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.agendas (
    id_agenda bigint NOT NULL,
    id_aluno_agenda bigint NOT NULL,
    titulo_agenda character varying NOT NULL,
    descricao_agenda character varying NOT NULL,
    data_agenda date NOT NULL,
    concluido_agenda boolean NOT NULL,
    cor_agenda character varying NOT NULL
);


ALTER TABLE public.agendas OWNER TO postgres;

--
-- Name: agendas_id_agenda_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.agendas_id_agenda_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.agendas_id_agenda_seq OWNER TO postgres;

--
-- Name: agendas_id_agenda_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.agendas_id_agenda_seq OWNED BY public.agendas.id_agenda;


--
-- Name: alunos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.alunos (
    id_aluno bigint NOT NULL,
    nome_aluno character varying NOT NULL,
    usuario_aluno character varying NOT NULL,
    senha_aluno character varying NOT NULL
);


ALTER TABLE public.alunos OWNER TO postgres;

--
-- Name: alunos_id_aluno_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.alunos_id_aluno_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.alunos_id_aluno_seq OWNER TO postgres;

--
-- Name: alunos_id_aluno_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.alunos_id_aluno_seq OWNED BY public.alunos.id_aluno;


--
-- Name: calendarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.calendarios (
    id_calendario bigint NOT NULL,
    id_aluno_calendario bigint NOT NULL,
    horario_calendario character varying NOT NULL,
    nome_disciplina_calendario character varying NOT NULL,
    nome_professor_calendario character varying,
    sala_calendario character varying,
    bloco_calendario character varying
);


ALTER TABLE public.calendarios OWNER TO postgres;

--
-- Name: calendarios_id_calendario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.calendarios_id_calendario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.calendarios_id_calendario_seq OWNER TO postgres;

--
-- Name: calendarios_id_calendario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.calendarios_id_calendario_seq OWNED BY public.calendarios.id_calendario;


--
-- Name: agendas id_agenda; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.agendas ALTER COLUMN id_agenda SET DEFAULT nextval('public.agendas_id_agenda_seq'::regclass);


--
-- Name: alunos id_aluno; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alunos ALTER COLUMN id_aluno SET DEFAULT nextval('public.alunos_id_aluno_seq'::regclass);


--
-- Name: calendarios id_calendario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calendarios ALTER COLUMN id_calendario SET DEFAULT nextval('public.calendarios_id_calendario_seq'::regclass);


--
-- Data for Name: agendas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.agendas (id_agenda, id_aluno_agenda, titulo_agenda, descricao_agenda, data_agenda, concluido_agenda, cor_agenda) FROM stdin;
\.
COPY public.agendas (id_agenda, id_aluno_agenda, titulo_agenda, descricao_agenda, data_agenda, concluido_agenda, cor_agenda) FROM '$$PATH$$/3341.dat';

--
-- Data for Name: alunos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.alunos (id_aluno, nome_aluno, usuario_aluno, senha_aluno) FROM stdin;
\.
COPY public.alunos (id_aluno, nome_aluno, usuario_aluno, senha_aluno) FROM '$$PATH$$/3337.dat';

--
-- Data for Name: calendarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.calendarios (id_calendario, id_aluno_calendario, horario_calendario, nome_disciplina_calendario, nome_professor_calendario, sala_calendario, bloco_calendario) FROM stdin;
\.
COPY public.calendarios (id_calendario, id_aluno_calendario, horario_calendario, nome_disciplina_calendario, nome_professor_calendario, sala_calendario, bloco_calendario) FROM '$$PATH$$/3339.dat';

--
-- Name: agendas_id_agenda_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.agendas_id_agenda_seq', 4, true);


--
-- Name: alunos_id_aluno_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.alunos_id_aluno_seq', 2, true);


--
-- Name: calendarios_id_calendario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.calendarios_id_calendario_seq', 2, true);


--
-- Name: agendas agendas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.agendas
    ADD CONSTRAINT agendas_pkey PRIMARY KEY (id_agenda);


--
-- Name: alunos alunos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alunos
    ADD CONSTRAINT alunos_pkey PRIMARY KEY (id_aluno);


--
-- Name: calendarios calendarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calendarios
    ADD CONSTRAINT calendarios_pkey PRIMARY KEY (id_calendario);


--
-- Name: agendas fk_id_aluno_agenda; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.agendas
    ADD CONSTRAINT fk_id_aluno_agenda FOREIGN KEY (id_aluno_agenda) REFERENCES public.alunos(id_aluno);


--
-- Name: calendarios fk_id_aluno_calendario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calendarios
    ADD CONSTRAINT fk_id_aluno_calendario FOREIGN KEY (id_aluno_calendario) REFERENCES public.alunos(id_aluno);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        